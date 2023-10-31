import React from "react";
import FormLogin from "./FormLogin/FormLogin";
import { useNavigate } from "react-router-dom";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import { useSnackbar } from "notistack";
import { login } from "../../common/services/AutenticacaoService";

export function Login() {
  const navigate = useNavigate();
  const snackbar = useSnackbar();

  const handleLogin = async ({ email, senha }) => {
    try {
      const resposta = await login(email, senha);
      if (resposta) {
        snackbar.enqueueSnackbar("Login efetuado com sucesso!", {
          variant: "success",
        });
        console.log("resposta", resposta);
        navigate("/area-mentor/" + resposta.mentor_id);
        return;
      }
    } catch (error) {
      snackbar.enqueueSnackbar("Erro ao efetuar login!", {
        variant: "error",
      });
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <FormLogin onSave={handleLogin} />
      <Footer />
    </div>
  );
}
