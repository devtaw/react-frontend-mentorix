import React from "react";
import { FormCadastro } from "./FormCadastro/FormCadastro";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";
import { postMentores } from "../../common/services/MentorService";
import { Container } from "react-bootstrap";

export function Cadastro() {
  const navigate = useNavigate();
  const snackbar = useSnackbar();

  const handleCadastro = async (body) => {
    try {
      const mentor = await postMentores(body);
      if (mentor) {
        // todo: chamar notificação de sucesso, redirecionar para área mentor
        snackbar.enqueueSnackbar("Usuário cadastrado com sucesso!", {
          variant: "success",
        });
        navigate("/login");
        return;
      }
    } catch (error) {
      // todo: chamar notificação de erro
      snackbar.enqueueSnackbar("Erro ao cadastrar usuário!", {
        variant: "error",
      });
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <FormCadastro onSave={handleCadastro} />
      </Container>
      <Footer />
    </>
  );
}
