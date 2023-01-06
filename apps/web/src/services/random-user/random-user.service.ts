import { api } from '../api';

export async function getRandomUser(page: number = 1) {
  const { data } = await api.get(`/random-user/${page}`);
  return data;
}
