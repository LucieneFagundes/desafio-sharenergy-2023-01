import { getApiClient } from '../api';

export async function getAllClientsRequest() {
  const api = getApiClient();
  const { data } = await api.get(`/clients`);
  return data;
}

export async function getClientRequest(id: string) {
  const api = getApiClient();
  const { data } = await api.get(`/clients/${id}`);
  return data;
}

export async function updateClientRequest(id: string, data: any) {
  const api = getApiClient();
  const res = await api.put(`/clients/${id}`, data);
  return res;
}

export async function deleteClientRequest(id: string) {
  const api = getApiClient();
  const res = await api.delete(`/clients/${id}`);
  return res;
}

export async function createClientRequest(data: any) {
  const api = getApiClient();
  const res = await api.post(`/clients`, data);
  return res;
}
