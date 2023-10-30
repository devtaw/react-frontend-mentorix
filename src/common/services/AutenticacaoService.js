import { httpClient } from "../../core/httpClient";

export const login = async (email, senha) => {
    const resposta = await httpClient.post('/autenticacao', { email, senha }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return resposta.data.data
}
