import { httpClient } from "../../core/httpClient";

export const login = async (email, senha) => {
    try {
        const config = {
            headers: {
                'X-password': senha
            },
        }
        const resposta = await httpClient.get('/autenticacao', { email, senha })
        return resposta.data

    } catch (error) {
        if(error.response) {
            return {
                message: error.response.data.message,
                success: error.response.data.success
            }
        } else {
            return {
                message: 'erro inesperado',
            }
        }
    }
}
