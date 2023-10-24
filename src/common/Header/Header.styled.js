import styled from "styled-components";

export const StyleHeader1 = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 25px;

  .logo {
    color: ${(p) => p.theme["secondary-900"]};
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
    color: ${(p) => p.theme["secondary-300"]};
    font-family: "Open Sans", sans-serif;
    font-size: 18.72px;
    font-weight: 700;
    letter-spacing: -0.374px;
    margin-right: 50px; // Espaçamento entre os links
  }

  .login-link {
    text-decoration: none;
    color: ${(p) => p.theme["background-dark"]};
    letter-spacing: -0.374px;
  }
`;
