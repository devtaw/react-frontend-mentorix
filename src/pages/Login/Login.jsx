import React from "react";
import FormLogin from "./FormLogin/FormLogin";
import { useNavigate } from "react-router-dom";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import { useSnackbar } from "notistack";
import { login } from "../../common/services/AutenticacaoService";

export function Login({ email, senha }) {
  const navigate = useNavigate();
  const snackbar = useSnackbar();

  const handleLogin = async () => {
    try {
      const resposta = await login(email, senha);
      if (resposta) {
        snackbar.enqueueSnackbar("Login efetuado com sucesso!", {
          variant: "success",
        });
        navigate("/area-mentor");
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
