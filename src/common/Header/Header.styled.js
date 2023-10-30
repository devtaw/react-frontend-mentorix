import styled from "styled-components";

export const StyleHeader = styled.header`
  display: grid;
  grid-template-columns: min-content minmax(160px, 1fr) minmax(min-content, auto);
  align-items: stretch;
  -webkit-box-align: stretch;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  padding: 25px 25px;
  background-color: ${(p) => p.theme["background-ligth"]};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 100%;

  img {
    width: 87px;
  }

  .lista_links {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .link {
    text-decoration: none;
    color: ${(p) => p.theme["background-dark"]} !important;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.374px;
    margin-right: 50px; // Espaçamento entre os links
  }

  .login-link {
    text-decoration: none;
    color: ${(p) => p.theme["background-dark"]} !important;
  }
`;
