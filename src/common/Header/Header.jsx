import React from "react";
import { StyleHeader } from "./Header.styled.js";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { MentorixButton } from "../Button/MentorixButton.styled.js";
import logoImg from "../../assets/img/logo-header.png";
import { SignIn } from "@phosphor-icons/react";

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = () => {
    navigate("/cadastro");
  };

  return (
    <>
      <StyleHeader className="content">
        <a href="/">
          <img src={logoImg} alt="Logo Mentorix" />
        </a>

        <nav className="d-flex align-items-center">
          <ul className="lista_links m-0">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>

            <li>
              <a href="#about" className="link">
                Sobre
              </a>
            </li>
            <li>
              <Link to="/lista-mentores" className="link">
                Mentores
              </Link>
            </li>
            <li>
              <a href="#contact" className="link">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className="d-flex align-items-center">
          <Link to="/login" className="link login-link d-flex align-items-center gap-1">
            Acessar
            <SignIn color={theme["background-dark"]} weight="fill" size={27} />
          </Link>

          <MentorixButton variant="primary" onClick={handleClick}>
            Criar conta
          </MentorixButton>
        </div>
      </StyleHeader>
    </>
  );
};

export default Header;
