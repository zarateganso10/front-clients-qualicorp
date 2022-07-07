import { instanceAxios } from "../api/axios";

export async function getAllClients() {
  const response = await instanceAxios.get("/clients");
  return response.data;
}

export async function getClientById(id) {
  const response = await instanceAxios.get(`/clients/${id}`);
  return response.data;
}

export async function updateClientById(id, data) {
  await instanceAxios.put(`/clients/${id}`, data);
}

export async function removeClientById(id) {
  await instanceAxios.delete(`/clients/${id}`);
}

export async function createClient(data) {
  const response = await instanceAxios.post("/clients", data);
  return response.data;
}
