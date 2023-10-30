import React from "react";
import { StyleHeader } from "./Header.styled.js";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { MentorixButton } from "../Button/MentorixButton.styled.js";
import { useState } from "react";
import logoImg from "../../assets/img/logo-header.png";

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const navigate = useNavigate();
  const theme = useTheme();

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }

  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  const handleClick = () => {
    navigate("/cadastro");
  };

  return (
    <>
      <StyleHeader className="content">
        <a href="/">
          <img src={logoImg} alt="Logo Mentorix" />
        </a>
        <nav>
          <ul className="lista_links m-0">
            <li>
              <Link to="/" className="link">
                HOME
              </Link>
            </li>

            <li>
              <a href="#about" className="link">
                SOBRE
              </a>
            </li>
            <li>
              <Link to="/lista-mentores" className="link">
                MENTORES
              </Link>
            </li>
            <li>
              <a href="#contact" className="link">
                CONTATO
              </a>
            </li>
            <li>
              <Link to="/login" className="link login-link">
                LOGIN
              </Link>
            </li>

            <li>
              <MentorixButton color={"terciary-200"} onClick={handleClick}>
                Criar conta
              </MentorixButton>
            </li>
          </ul>
        </nav>
      </StyleHeader>
    </>
  );
};

export default Header;
