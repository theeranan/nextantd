import Iron from '@hapi/iron';
import { MAX_AGE, setTokenCookie, getTokenCookie } from './auth-cookies';

const TOKEN_SECRET =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjllNWUyNGVmLTlkOTYtNGI5Yi04YzdlLTM3ZGUwYWRlYzFkMCIsImlhdCI6MTU5NjE5MjE0NiwiZXhwIjoxNTk2MTk1NzQ2fQ.TFm6L7WYIHk_9d0Znt4AQKJ5EH4i32MEg9d0nUKqLic';

export async function setLoginSession(res, session) {
  const createdAt = Date.now();
  // Create a session object with a max age that we can validate later

  const obj = { ...session, createdAt, maxAge: MAX_AGE };
  const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults);
  setTokenCookie(res, token);
}

export async function getLoginSession(req) {
  const token = getTokenCookie(req);

  if (!token) return;

  const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults);
  const expiresAt = session.createdAt + session.maxAge * 1000;

  // Validate the expiration date of the session
  if (Date.now() < expiresAt) {
    return session;
  }
}
