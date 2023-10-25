import styled from "styled-components";

export const ContatoContainer = styled.footer`
  background-image: url("../src/assets/img/section-contato1.png");
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 150px;
  width: 100%;
  flex-wrap: nowrap;
  align-items: baseline;

  color: ${(p) => p.theme["background-light"]};

  h1 {
    color: ${(p) => p.theme["secondary-400"]};
  }

  h2 {
    color: ${(p) => p.theme["secondary-400"]};
  }
`;
