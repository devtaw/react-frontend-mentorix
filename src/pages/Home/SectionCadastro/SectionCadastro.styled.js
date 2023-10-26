import styled from "styled-components";

export const ContatoContainer = styled.div`
  align-items: center;
  background-color: ${(p) => p.theme["background-light"]};
  padding: 20px;
  display: flex;
  justify-content: center; /* Defina para centralizar horizontalmente */
`;

export const TextContainer = styled.div`
  padding: 50px;
  text-align: center; /* Centralize o texto horizontalmente */
  h3 {
    font-size: 30px;
    color: ${(p) => p.theme["primary-900"]};
  }
  p {
    font-size: 25px;
    color: ${(p) => p.theme["primary-900"]};
  }
`;
