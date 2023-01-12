// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/home/home';
import RandomUsers from './pages/random-users/random-users';
import RandomDogs from './pages/random-dogs/random-dogs';
import HttpCats from './pages/http-cats/http-cats';
import Clients from './pages/clients/clients';
import NewClient from './pages/new-client/new-client';
import Client from './pages/clients/client/client';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/random-users" element={<RandomUsers />} />
        <Route path="/http-cats" element={<HttpCats />} />
        <Route path="/random-dogs" element={<RandomDogs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/:id" element={<Client />} />
        <Route path="/new-client" element={<NewClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
