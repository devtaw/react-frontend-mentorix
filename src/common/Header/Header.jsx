import React from "react";
import { StyleHeader1 } from "./Header.styled.js"; // Importe o estilo a partir do arquivo Header.styled
// import { Button } from "../common/Button/Button";
import { Link } from "react-router-dom"; // Importe o Link se você estiver usando React Router

const Header = () => {
  return (
    <StyleHeader1 className="content">
      <img src="/src/assets/img/logo-header.png" alt="Logo Mentorix" />{" "}
      <nav>
        <ul className="lista_links">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/sobre" className="link">
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/mentores" className="link">
              Mentores
            </Link>
          </li>
          <li>
            <Link to="/contato" className="link">
              Contato
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              Login
            </Link>
          </li>
          {/* <li>
            <Button texto="Criar Conta" variant="primary" />
          </li> */}
        </ul>
      </nav>
    </StyleHeader1>
  );
};

export default Header;
