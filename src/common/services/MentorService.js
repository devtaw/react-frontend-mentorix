import { httpClient } from "../../core/httpClient";

export async function getMentores() {
  return httpClient.get("/mentores").then((response) => response.data);
}

export async function getMentoresEspecialidades() {
  return httpClient.get("/mentor-especialidades").then((response) => response.data);
}
