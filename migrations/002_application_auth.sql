BEGIN;
CREATE TABLE IF NOT EXISTS governed_app_users (
  email TEXT PRIMARY KEY CHECK (email = LOWER(email)),
  password_hash TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'manager', 'analyst')),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'disabled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS governed_app_sessions (
  token_hash CHAR(64) PRIMARY KEY,
  user_email TEXT NOT NULL REFERENCES governed_app_users(email) ON DELETE CASCADE,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS governed_app_sessions_expiry_idx ON governed_app_sessions(expires_at);
COMMIT;
