import React from "react";
import { StyleHeader } from "./Header.styled.js";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { MentorixButton } from "../Button/MentorixButton.styled.js";
import { useState } from "react";
import { LoginModal } from "../../pages/Login/Login.jsx";
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
          <ul className="lista_links">
            <li>
              <Link to="/" className="link">
                HOME
              </Link>
            </li>

            <li>
              <Link to="#about" className="link">
                SOBRE
              </Link>
            </li>
            <li>
              <Link to="/lista-mentores" className="link">
                MENTORES
              </Link>
            </li>
            <li>
              <Link to="#contact" className="link">
                CONTATO
              </Link>
            </li>
            <li>
              <Link to="#cadastro" className="link">
                CADASTRO
              </Link>
            </li>

            <li>
              <MentorixButton color={"terciary-200"} onClick={handleOpenLoginModal}>
                LOGIN
              </MentorixButton>
            </li>
          </ul>
        </nav>
      </StyleHeader>

      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal}></LoginModal>
    </>
  );
};

export default Header;
