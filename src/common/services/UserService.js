import { httpClient } from "../../core/httpClient";

export async function autenticarUser(email, password) {
  //manda objeto com duas propriedades login e senha, objeto recebe e-mail e password que estão vindo como parametro da função
  return httpClient.post("/autenticacao", { login: email, senha: password });
}
