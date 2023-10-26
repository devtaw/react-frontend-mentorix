import styled from "styled-components";
import { ContentContainer } from "../../../common/ContentContainer.styled";

export const Container = styled(ContentContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 62px 0 0 0;
`;

export const AboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) => p.theme["blue-gray-50"]};
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 20px;

  H1 {
    font-family: "Open Sans", sans-serif;
    color: #313391;
    padding: 5px 10px; /* Ajuste o valor de preenchimento conforme necessário */
    display: inline-block; /* Torna o elemento um bloco inline */
    width: auto; /* A largura se ajustará automaticamente ao conteúdo */
  }

  h3 {
    font-family: "Open Sans", sans-serif;
    color: #313391;
    padding: 5px 10px; /* Ajuste o valor de preenchimento conforme necessário */
    display: inline-block; /* Torna o elemento um bloco inline */
    width: auto; /* A largura se ajustará automaticamente ao conteúdo */
  }

  h6 {
    font-family: "Open Sans", sans-serif;
    background-color: ${(p) => p.theme["primary-400"]};
    color: ${(p) => p.theme["terciary-a100"]};
    padding: 5px 10px; /* Ajuste o valor de preenchimento conforme necessário */
    display: inline-block; /* Torna o elemento um bloco inline */
    width: auto; /* A largura se ajustará automaticamente ao conteúdo */
  }
`;
export const ImageContainer = styled.div`
  img {
    width: 70%;
    max-width: 70%;
  }
`;
