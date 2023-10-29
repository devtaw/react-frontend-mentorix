import { httpClient } from "../../core/httpClient";

export async function getMentores() {
  return httpClient.get("/mentores").then((response) => response.data);
}

export async function postMentores(body) {
  const resposta = await httpClient.post('/mentores', body)
  return resposta.data
}
