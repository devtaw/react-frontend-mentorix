import React from "react";
import FormCadastro from "./FormCadastro/FormCadastro";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";

export function Cadastro() {
  const handleCadastro = async () => {
    e.preventDefault();
    const navigate = useNavigate();
    const snackbar = useSnackbar();

    try {
      const resposta = await postMentores(body);
      if (resposta) {
        // todo: chamar notificação de sucesso, redirecionar para área mentor
        snackbar.enqueueSnackbar("Usuário cadastrado com sucesso!", {
          variant: "success",
        });
        navigate("/area-mentor");
        return;
      }
    } catch (error) {
      // todo: chamar notificação de erro
      snackbar.enqueueSnackbar("Erro ao cadastrar usuário!", {
        variant: "error",
      });
    }
  };

  const body = {
    nomeCompleto,
    email,
    senha,
    confirmaSenha,
    fotoPerfil,
    biografia,
    linkedin,
    profissao,
  };

  return (
    <div>
      <Header />
      <FormCadastro />
      <Footer />
    </div>
  );
}
