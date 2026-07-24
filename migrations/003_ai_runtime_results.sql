BEGIN;
CREATE TABLE IF NOT EXISTS governed_app_ai_results (
  id BIGSERIAL PRIMARY KEY,
  user_email TEXT NOT NULL REFERENCES governed_app_users(email) ON DELETE RESTRICT,
  feature TEXT NOT NULL,
  input JSONB NOT NULL,
  output TEXT NOT NULL,
  model TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS governed_app_ai_results_user_feature_idx ON governed_app_ai_results(user_email, feature, created_at DESC);
COMMIT;
