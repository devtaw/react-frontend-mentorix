import { httpClient } from "../../core/httpClient";

export async function getMentores() {
  return httpClient.get("/mentores");
}
