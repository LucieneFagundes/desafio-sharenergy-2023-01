// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
