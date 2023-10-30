import { httpClient } from "../../core/httpClient";

export function login(email, senha) {
    return httpClient.get('/login', { email, senha })
}
