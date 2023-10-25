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
  color: ${(props) => props.theme["blue-gray-50"]};

  h1 {
    color: ${(props) => props.theme["secondary-400"]};
  }
`;
