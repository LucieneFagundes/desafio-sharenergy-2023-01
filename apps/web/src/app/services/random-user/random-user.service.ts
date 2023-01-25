import { getApiClient } from '../api';

export async function getRandomUser(page: number = 1) {
  const api = getApiClient();
  const { data } = await api.get(`/random-user/${page}`);
  return data;
}
