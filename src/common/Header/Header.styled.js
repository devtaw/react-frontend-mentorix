import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  position: relative;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  padding: 25px 25px;
  background-color: ${(p) => p.theme["background-dark"]};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .logo {
    color: ${(p) => p.theme["background-dark"]};
    line-height: normal;
    max-width: 130px;
    height: auto;
  }

  .lista_links {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .link {
    text-decoration: none;
    color: ${(p) => p.theme["text-light"]} !important;
    font-family: "Open Sans", sans-serif;
    font-size: 18.72px;
    font-weight: 700;
    letter-spacing: -0.374px;
    margin-right: 50px; // Espaçamento entre os links
  }

  .login-link {
    text-decoration: none;
    color: ${(p) => p.theme["terciary-a100"]} !important;
  }
`;
