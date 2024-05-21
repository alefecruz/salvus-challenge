import { verify } from 'jsonwebtoken';
import authConfig from './config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  if (token) {
    const decoded = verify(token, authConfig.jwt.secret);
    const { exp } = decoded as TokenPayload;
    if (Date.now() >= exp * 1000) {
      return false;
    }
    return true;
  }
  return false;
};
