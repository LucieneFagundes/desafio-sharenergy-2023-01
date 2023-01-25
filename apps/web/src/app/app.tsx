// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/home/home';
import RandomUsers from './pages/random-users/random-users';
import RandomDogs from './pages/random-dogs/random-dogs';
import HttpCats from './pages/http-cats/http-cats';
import Clients from './pages/clients/clients';
import NewClient from './pages/new-client/new-client';
import Client from './pages/clients/client/client';
import { AuthContext, AuthProvider } from './contexts/auth-context';
import { useContext } from 'react';

export function App() {
  const Private = ({ children }: any) => {
    const { isAuthenticated, loading } = useContext(AuthContext);
    if (loading) {
      return <div>Carregando ...</div>;
    }
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route
            path="/random-users"
            element={
              <Private>
                <RandomUsers />
              </Private>
            }
          />
          <Route
            path="/http-cats"
            element={
              <Private>
                <HttpCats />
              </Private>
            }
          />
          <Route
            path="/random-dogs"
            element={
              <Private>
                <RandomDogs />
              </Private>
            }
          />
          <Route
            path="/clients"
            element={
              <Private>
                <Clients />
              </Private>
            }
          />
          <Route
            path="/clients/:id"
            element={
              <Private>
                <Client />
              </Private>
            }
          />
          <Route
            path="/new-client"
            element={
              <Private>
                <NewClient />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
