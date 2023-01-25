import { getApiClient } from '../api';

export async function getHttpCatRequest(code: number) {
  const api = getApiClient();
  const { data } = await api.get(`/http-cat/${code}`);
  return data;
}
