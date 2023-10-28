import React from "react";
import { ContentContainer } from "../../common/ContentContainer.styled";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import SectionAbout from "./SectionAbout/SectionAbout";
import { SectionContact } from "./SectionContact/SectionContact";
import SectionWelcome from "./SectionWelcome/SectionWelcome";
import { Login } from "../Login/Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home({ usuario, senha, setUsuario, setSenha }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [cadastroIsOpen, setCadastroIsOpen] = useState(false);

  const navigate = useNavigate();

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  // function handleCadastroCloseModal() {
  //   setCadastroIsOpen(false);
  // }

  // function handleCadastroOpenModal() {
  //   setCadastroIsOpen(true);
  // }

  function handleLogin() {
    navigate("/area-mentor");
    console.log(usuario, senha);
  }
  return (
    <>
      <Header />
      <SectionWelcome />
      <SectionAbout />
      <SectionContact />
      <Footer />
      <Login
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        onSave={handleLogin}
      />
      {/* <CadastroModal
        isOpen={cadastroIsOpen}
        onClose={handleCadastroCloseModal}
      /> */}
    </>
  );
}
