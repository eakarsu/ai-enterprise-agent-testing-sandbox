# Enterprise agent sandbox operations

`/api/governed-agent-jobs` is authoritative for typed evaluation jobs. Tool/version, JSON-like input/output schemas, grounded source chunks, provenance hashes/freshness, evaluation dataset/policy versions, cost/latency/safety/quality gates, trace IDs, isolated runner contracts, and independent approval are mandatory. Generic prompt-wrapper pages cannot approve a result.

Configure `.env.example`, install dependencies explicitly, run `./start.sh check`, create a backup, then use `ALLOW_SCHEMA_MIGRATION=1 ./start.sh migrate`. Provision the initial administrator separately with `ADMIN_EMAIL` and a 12+ character `ADMIN_PASSWORD` via `npm --prefix backend run create-admin`. Startup never installs, seeds, resets, creates schema, edits credentials, or kills ports. Rollback deploys prior code with additive tables retained after reconciling running leases and approvals.

Connectors use stable IDs/versions, tenant permission scopes, incremental upsert, freshness, hashes, and deletion-pending propagation. A source must be indexed, fresh, undeleted, and within every signed subject scope before use. Jobs are payload-idempotent, rate limited, leased with `SKIP LOCKED`, timeout-bounded, network-denied by default, retry/dead-letter controlled, traceable, and record input/output digests rather than credentials.

The repository defines the isolation contract; production container/microVM enforcement, network egress controls, connector credentials, representative enterprise datasets, human reviewer staffing, penetration testing, and security/compliance certification remain external gates and are not claimed. Review Git history and rotate potentially real `.env` values.
