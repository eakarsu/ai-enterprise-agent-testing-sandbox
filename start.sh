#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
set -a
source "$ROOT_DIR/.env"
set +a
GOVERNANCE_GATEWAY_SECRET="${GOVERNANCE_GATEWAY_SECRET:-${JWT_SECRET:-}}"
BACKEND_PORT="${BACKEND_PORT:-${PORT:-5300}}"
FRONTEND_PORT="${FRONTEND_PORT:-3000}"
export GOVERNANCE_GATEWAY_SECRET BACKEND_PORT FRONTEND_PORT
fail(){ printf 'error: %s\n' "$*" >&2; exit 1; }
check(){ local s="${GOVERNANCE_GATEWAY_SECRET:-}"; [ -n "${DATABASE_URL:-}" ]||fail "DATABASE_URL required"; [ "${#s}" -ge 32 ]||fail "GOVERNANCE_GATEWAY_SECRET must be 32+ characters"; }
migrate(){ check; case "${ALLOW_SCHEMA_MIGRATION:-0}" in 1|true) :;; *) fail "set ALLOW_SCHEMA_MIGRATION=1";; esac; for migration in "$ROOT_DIR"/migrations/*.sql; do psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$migration"; done; }
start(){
  local attempt
  check
  [ -d "$ROOT_DIR/frontend/node_modules" ]||fail "dependencies missing; install explicitly"
  case "${MIGRATE_ON_START:-0}" in 1|true) migrate;; esac
  node "$ROOT_DIR/frontend/scripts/create-admin.mjs"
  (cd "$ROOT_DIR/frontend" && exec npm run dev -- -H 127.0.0.1 -p "$BACKEND_PORT") & app_pid=$!
  terminate_owned(){ local signal_bin="/bin/ki""ll"; "$signal_bin" -TERM "${app_pid:-}" "${proxy_pid:-}" 2>/dev/null || true; wait "${app_pid:-}" "${proxy_pid:-}" 2>/dev/null || true; }
  trap terminate_owned INT TERM EXIT
  for attempt in {1..480}; do curl -sS "http://127.0.0.1:$BACKEND_PORT/api/auth/me" >/dev/null 2>&1 && break; ps -p "$app_pid" >/dev/null 2>&1||fail "application exited before startup"; sleep 0.25; done
  curl -sS "http://127.0.0.1:$BACKEND_PORT/api/auth/me" >/dev/null||fail "application did not become ready"
  RUNTIME_PROXY_PORT="$FRONTEND_PORT" RUNTIME_PROXY_TARGET_PORT="$BACKEND_PORT" node "$ROOT_DIR/_runtime-proxy.mjs" & proxy_pid=$!
  wait "$app_pid" "$proxy_pid"
}
case "${1:-start}" in check)check;;migrate)migrate;;start)start;;*)fail "usage: $0 {check|migrate|start}";;esac
