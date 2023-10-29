import React from "react";
import { useState } from "react";
import { MentorixModal } from "../../common/MentorixModal/MentorixModal";
import FormCadastro from "./FormCadastro/FormCadastro";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

export function Cadastro({ isOpen, onClose }) {
  const handleCadastro = async () => {
    e.preventDefault();

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

    if (senha === confirmaSenha) {
      const resposta = await postMentores(body);
      if (resposta) {
        // todo: chamar notificação de sucesso, redirecionar para área mentor

        return;
      }
      // todo: chamar notificação de erro
    }
  };

  return (
    <div>
      <Header />
      <FormCadastro />
      <Footer />
    </div>
  );
}
