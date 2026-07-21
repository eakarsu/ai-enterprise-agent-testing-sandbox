BEGIN;
CREATE TABLE IF NOT EXISTS sandbox_sources(tenant_id TEXT NOT NULL,id TEXT NOT NULL,provider TEXT NOT NULL,source_id TEXT NOT NULL,source_version TEXT NOT NULL,permission_scope TEXT[] NOT NULL,payload_hash CHAR(64) NOT NULL,freshness_at TIMESTAMPTZ NOT NULL,deleted_at_source TIMESTAMPTZ,index_status TEXT NOT NULL DEFAULT 'pending',created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),PRIMARY KEY(tenant_id,id),UNIQUE(tenant_id,provider,source_id));
CREATE TABLE IF NOT EXISTS sandbox_jobs(tenant_id TEXT NOT NULL,id TEXT NOT NULL,tool_id TEXT NOT NULL,tool_version TEXT NOT NULL,state TEXT NOT NULL DEFAULT 'queued',version INTEGER NOT NULL DEFAULT 1,input JSONB NOT NULL,contract JSONB NOT NULL,request_hash CHAR(64) NOT NULL,idempotency_key TEXT NOT NULL,trace_id UUID NOT NULL,created_by TEXT NOT NULL,approved_by TEXT,attempts INTEGER NOT NULL DEFAULT 0,lease_token UUID,lease_expires_at TIMESTAMPTZ,next_attempt_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),result JSONB,metrics JSONB,failure_code TEXT,created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),PRIMARY KEY(tenant_id,id),UNIQUE(tenant_id,idempotency_key));
CREATE TABLE IF NOT EXISTS sandbox_job_events(seq BIGSERIAL PRIMARY KEY,tenant_id TEXT NOT NULL,job_id TEXT NOT NULL,actor_id TEXT NOT NULL,event_type TEXT NOT NULL,input_digest CHAR(64),output_digest CHAR(64),details JSONB NOT NULL DEFAULT '{}'::jsonb,created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),FOREIGN KEY(tenant_id,job_id) REFERENCES  sandbox_jobs(tenant_id,id) ON DELETE RESTRICT);
CREATE TABLE IF NOT EXISTS sandbox_evaluation_cases(tenant_id TEXT NOT NULL,dataset_version TEXT NOT NULL,case_id TEXT NOT NULL,input JSONB NOT NULL,expected JSONB NOT NULL,policy_tags TEXT[] NOT NULL,PRIMARY KEY(tenant_id,dataset_version,case_id));
CREATE INDEX IF NOT EXISTS sandbox_source_scope_idx ON sandbox_sources USING GIN(permission_scope);
CREATE INDEX IF NOT EXISTS sandbox_job_ready_idx ON sandbox_jobs(state,next_attempt_at,lease_expires_at);
CREATE OR REPLACE FUNCTION sandbox_events_append_only() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  RAISE EXCEPTION 'sandbox events are append-only';
END
$$;
DROP TRIGGER IF EXISTS sandbox_events_append_only_trigger ON sandbox_job_events;
CREATE TRIGGER sandbox_events_append_only_trigger BEFORE UPDATE OR DELETE ON sandbox_job_events FOR EACH ROW EXECUTE FUNCTION sandbox_events_append_only();
COMMIT;
