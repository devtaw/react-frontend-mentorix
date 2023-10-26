import React from "react";
import { StyleHeader } from "./Header.styled.js";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { MentorixButton } from "../Button/MentorixButton.styled.js";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cadastro");
  };
  const theme = useTheme();
  return (
    <StyleHeader className="content">
      <a href="/">
        <img src="../src/assets/img/logo-header.png" alt="Logo Mentorix" />
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
            <MentorixButton color={"terciary-200"} onClick={handleClick}>
              LOGIN
            </MentorixButton>
          </li>
        </ul>
      </nav>
    </StyleHeader>
  );
};

export default Header;
