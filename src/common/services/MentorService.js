import { httpClient } from "../../core/httpClient";
import axios from "axios";

export function getMentores() {
  return httpClient.get("/mentores").then((response) => response.data);
}

export async function getMentoresEspecialidades() {
  return httpClient.get("/mentor-especialidades").then((response) => response.data);
}

export function getMentorById(id) {
  console.log(id);
  return httpClient.get("/mentores/" + id).then((response) => response.data);
}

export function updateMentor(id, mentor) {
  const url = `/mentores/${id}`;
  return axios
    .put(url, mentor)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export async function postMentores(body) {
  const resposta = await httpClient.post("/mentores", body);
  return resposta.data;
}
