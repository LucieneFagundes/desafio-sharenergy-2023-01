import { getApiClient } from '../api';

interface IAuthRequest {
  username: string;
  password: string;
}

export async function authRequest({ username, password }: IAuthRequest) {
  const api = getApiClient();
  const { data } = await api.post(`/auth`, { username, password });
  return data;
}
