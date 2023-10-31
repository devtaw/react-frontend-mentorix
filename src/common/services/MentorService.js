import { httpClient } from "../../core/httpClient";

export function getMentores() {
  return httpClient.get("/mentores").then((response) => response.data);
}

export async function getMentoresEspecialidades() {
  return httpClient.get("/mentor-especialidades").then((response) => response.data);
}

export function getMentorById(id) {
  console.log(id);
  let teste = httpClient.get("/mentores/" + id).then((response) => response.data);
  console.log(teste);
  return teste;
}

export function updateMentor(id, mentor) {
  return httpClient.put("/mentores/" + id, mentor).then((response) => response.data);
}

export async function postMentores(body) {
  const resposta = await httpClient.post("/mentores", body);
  return resposta.data;
}
