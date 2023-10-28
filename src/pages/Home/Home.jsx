import React from "react";
import { ContentContainer } from "../../common/ContentContainer.styled";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import SectionAbout from "./SectionAbout/SectionAbout";
import { SectionContact } from "./SectionContact/SectionContact";
import SectionWelcome from "./SectionWelcome/SectionWelcome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Home({ usuario, senha, setUsuario, setSenha }) {


  const navigate = useNavigate();

  // function handleLogin() {
  //   navigate("/area-mentor");
  //   console.log(usuario, senha);
  // }
  return (
    <>
      <Header />
      <SectionWelcome />
      <SectionAbout />
      <SectionContact />
      <Footer />
    </>
  );
}
