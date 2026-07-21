import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'node:crypto';
import { governedQuery } from '@/lib/governedPostgres';
import type { SessionUser } from '@/lib/auth';

const sessionLifetimeMs = 8 * 60 * 60 * 1000;
type UserRow = { email: string; first_name: string; last_name: string; role: SessionUser['role']; password_hash?: string };

function asSessionUser(row: UserRow): SessionUser {
  return { email: row.email, firstName: row.first_name, lastName: row.last_name, role: row.role };
}

function sessionDigest(token: string) {
  return createHash('sha256').update(token).digest('hex');
}

async function verifyPassword(password: string, encoded: string) {
  const [algorithm, nValue, rValue, pValue, salt, expected] = encoded.split('$');
  if (algorithm !== 'scrypt' || !salt || !expected) return false;
  const n = Number(nValue), r = Number(rValue), p = Number(pValue);
  if (n !== 16384 || r !== 8 || p !== 1) return false;
  const actual = await new Promise<Buffer>((resolve, reject) => {
    scryptCallback(password, salt, 64, { N: n, r, p, maxmem: 64 * 1024 * 1024 }, (error, value) => error ? reject(error) : resolve(value));
  });
  const expectedBytes = Buffer.from(expected, 'hex');
  return actual.length === expectedBytes.length && timingSafeEqual(actual, expectedBytes);
}

export async function authenticateUser(email: string, password: string): Promise<SessionUser | null> {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !password) return null;
  const result = await governedQuery<UserRow>(
    `SELECT email, first_name, last_name, role, password_hash FROM governed_app_users WHERE email = $1 AND status = 'active'`,
    [normalizedEmail],
  );
  const row = result.rows[0];
  if (!row?.password_hash || !(await verifyPassword(password, row.password_hash))) return null;
  return asSessionUser(row);
}

export async function createSession(user: SessionUser) {
  const token = randomBytes(32).toString('base64url');
  await governedQuery('INSERT INTO governed_app_sessions(token_hash, user_email, expires_at) VALUES($1, $2, $3)', [sessionDigest(token), user.email, new Date(Date.now() + sessionLifetimeMs)]);
  return token;
}

export async function getSessionUser(token?: string | null): Promise<SessionUser | null> {
  if (!token || token.length < 32 || token.length > 256) return null;
  const result = await governedQuery<UserRow>(
    `SELECT u.email, u.first_name, u.last_name, u.role FROM governed_app_sessions s JOIN governed_app_users u ON u.email = s.user_email WHERE s.token_hash = $1 AND s.expires_at > NOW() AND u.status = 'active'`,
    [sessionDigest(token)],
  );
  return result.rows[0] ? asSessionUser(result.rows[0]) : null;
}

export async function revokeSession(token?: string | null) {
  if (!token || token.length < 32 || token.length > 256) return;
  await governedQuery('DELETE FROM governed_app_sessions WHERE token_hash = $1', [sessionDigest(token)]);
}
