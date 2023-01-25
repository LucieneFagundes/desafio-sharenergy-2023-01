import axios from 'axios';

export function getApiClient() {
  const api = axios.create({
    baseURL: 'http://localhost:3535/api',
  });

  const token = localStorage.getItem('auth_token');

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return api;
}
