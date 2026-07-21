# Completeness Review: ai-enterprise-agent-testing-sandbox

**Review date:** 2026-07-18

## Assessment basis

Static inspection of project-owned source and configuration only; no dependency installation, build, database migration, external-service call, or runtime launch was performed. The scan considered 90 project files (66 source files), 2 manifest(s), 0 test-like file(s), and 0 CI workflow(s), excluding dependency/generated directories.

## Classification

**Prototype-demo**

This is a prototype/demo for AI/agent platform. Generated gap/demo patterns are present: it contains 66 source files and visible routes/pages in `frontend/`, `backend/`, but those surfaces are not evidence of durable domain execution, verified integrations, or operational completion.

## Why it is not complete

- Generated gap/visualization routes describe missing capabilities or simulate recommendations; they do not implement the underlying domain operation.
- Generic LLM calls are used as product behavior without enough typed tools, grounded evidence, deterministic rules, or output evaluation.
- Mock, demo, sample, fixture, or placeholder behavior remains in executable/product paths.
- No recognizable project-owned automated tests were found for the main workflow.
- No checked-in CI workflow proves builds, tests, migrations, and security checks on every change.

## Needed features

1. Replace generic prompt wrappers with typed domain tools, grounded retrieval, provenance, and schema-validated outputs.
2. Add tenant-scoped connectors, permission-aware indexing, incremental sync, deletion propagation, and source freshness indicators.
3. Implement evaluation datasets, quality/safety gates, cost and latency budgets, tracing, and human approval checkpoints.
4. Run tools in isolated jobs with timeouts, retries, idempotency, rate limits, and auditable input/output records.
5. Add risk-based unit, integration, and end-to-end tests in CI, including migration and failure-path coverage.

## Risks or launch blockers

- Credential/configuration exposure: environment files are present in the repository tree and must be checked against Git history and rotated if real.
- Automation contains destructive process, filesystem, or database operations; do not run it on a shared machine without review.
- Startup appears coupled to seed/migration behavior, risking data mutation or non-repeatable launches.
- AI-provider availability, cost, privacy, prompt injection, and unvalidated output are launch risks until bounded and evaluated.

## Evidence inspected

- `README.md`
- `SOURCE_DATA_TABLES.md:127`
- `frontend/src/lib/sourceAIToolFields.ts:6`
- `frontend/src/app/layout.tsx`
- `backend/package.json`
- `start.sh`

## Recommended next action

Stop adding generated pages; prove one AI/agent platform workflow against real services and persistent state, with tests and measurable acceptance criteria.

## Implementation progress (2026-07-18)

1. **Completed** — Added versioned typed tool contracts, recursive schema validation for inputs/outputs, grounded indexed source requirements, chunk/source/hash/freshness provenance, deterministic gate results, and a hard boundary preventing generic prompt wrappers from approving jobs.
2. **Completed at the connector/index boundary** — Added tenant-scoped document/CRM/ticketing/warehouse/policy connectors with signed subject permissions, stable source IDs/versions, incremental deduplicated sync, freshness, payload hashes, ready/deletion-pending index states, and deletion propagation. Live connectors remain external.
3. **Completed in code; representative dataset/reviewer operations remain external** — Added versioned evaluation datasets/policies, quality/safety/cost/latency budgets, trace IDs, metric/failure evidence, fail-closed gates, and independent evaluation/safety approval. Production datasets and qualified reviewer staffing are not claimed.
4. **Completed at the runner contract boundary** — Added persistent isolated jobs with deny-by-default network/ephemeral-filesystem/timeout contracts, per-actor rate limits, payload idempotency, leased `SKIP LOCKED` claims, expiry recovery, bounded retries/dead letters, and append-only input/output digest events. Production container/microVM enforcement remains an external deployment gate.
5. **Completed** — Added 12 unit/contract/integration-boundary tests in CI, additive tenant-scoped migration, destructive-migration/syntax/startup checks, failure-path coverage, fail-closed environment documentation, and a non-destructive check/migrate/start plus backup/rollback/dead-letter/incident runbook.

## Runtime verification (2026-07-20)

- The launcher now requires the assigned port, refuses occupied ports, respects acceptance-environment precedence, and starts the real source tree when exercised through the isolated validation fixture.
- Replaced source-coded demo passwords and unsigned identity cookies with explicitly provisioned PostgreSQL users, scrypt password verification, opaque hashed server-side sessions, database-backed `/api/auth/me`, and logout revocation.
- First acceptance passed on fresh PostgreSQL `55622`, application `6058`, and reserved UI `6059` with `startup_login_session_api`; the authenticated request reloaded the administrator session from PostgreSQL.
- All 12 governance tests, TypeScript validation, the optimized 21-page Next.js build, launcher and JavaScript syntax checks, and whitespace validation passed. The acceptance ports were released afterward.
