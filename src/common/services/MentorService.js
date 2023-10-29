import { httpClient } from "../../core/httpClient";

export async function getMentores() {
  return httpClient.get("/mentores").then((response) => response.data);
}

export async function postMentores(body, senha) {
  const config = {

  }
  const resposta = await httpClient.post('/mentores', body, config)
  return resposta.data
}
