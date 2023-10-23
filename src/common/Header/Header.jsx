import React from "react";
import * as S from "./HeaderStyles";

// import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cadastro");
  };

  return (
    <S.StyleHeader className="content">
      <img src="../src/assets/MentorixLogo" alt="MentorixLogo" />
      <nav>
        <ul className={"lista_links"}>
          <li>
            <Link className={"link"}>Home</Link>
          </li>

          <li>
            <Link className={"link"}>Sobre</Link>
          </li>
          <li>
            <Link className={"link"}>Mentores</Link>
          </li>
          <li>
            <Link className={"link"}>Contato</Link>
          </li>
          <li>
            <Link to="/login" className={"link"}>
              Login
            </Link>
          </li>
          <li>
            <Button
              texto="Criar Conta"
              variant="primary"
              onClick={handleClick}
            />
          </li>
        </ul>
      </nav>
    </S.StyleHeader>
  );
};

export default Header;
