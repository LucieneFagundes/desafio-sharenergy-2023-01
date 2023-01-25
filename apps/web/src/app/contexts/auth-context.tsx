import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authRequest } from '../services/auth/auth.service';
import jwtDecode from 'jwt-decode';
import { getApiClient } from '../services/api';

type User = {
  id: string;
  username: string;
};

type SignInType = {
  username: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
  logIn: (data: SignInType) => Promise<void>;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = getApiClient();
    const recoveredToken = localStorage.getItem('auth_token');

    if (recoveredToken) {
      let decode: any = jwtDecode(recoveredToken);

      api.defaults.headers.common['Authorization'] = `Bearer ${recoveredToken}`;
      setUser({
        id: decode.sub,
        username: decode.username,
      });
    }
    setLoading(false);
  }, []);

  async function logIn({ username, password }: SignInType) {
    const { token } = await authRequest({
      username,
      password,
    });

    const api = getApiClient();

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('auth_token', token);

    let decode: any = jwtDecode(token);
    setUser({
      id: decode.sub,
      username: decode.username,
    });

    navigate('/');
  }

  function logOut() {
    localStorage.removeItem('auth_token');
    setUser(null);
    navigate('/login');
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, user, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
