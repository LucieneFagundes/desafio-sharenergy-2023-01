import { api } from '../api';

export async function getHttpCatRequest(code: number) {
  const { data } = await api.get(`/http-cat/${code}`);
  return data;
}
