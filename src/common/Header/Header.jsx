import React from "react";
import { StyleHeader1 } from "./Header.styled.js";
import { Link } from "react-router-dom"; // Importe o Link se você estiver usando React Router

const Header = () => {
  return (
    <StyleHeader1 className="content">
      <img src="../src/assets/img/logo-header.png" alt="Logo Mentorix" />
      <nav>
        <ul className="lista_links">
          <li>
            <Link to="/" className="link">
              HOME
            </Link>
          </li>

          <li>
            <Link to="/sobre" className="link">
              SOBRE
            </Link>
          </li>
          <li>
            <Link to="/mentores" className="link">
              MENTORES
            </Link>
          </li>
          <li>
            <Link to="/contato" className="link">
              CONTATO
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </StyleHeader1>
  );
};

export default Header;
