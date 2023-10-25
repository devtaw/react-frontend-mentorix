import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 20px;

  // Adicione aqui os estilos que desejar para o container principal
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 20px;

  // Estilos para a área de texto
  & > h1 {
    font-size: 24px;
    color: #333;
    // Adicione mais estilos de texto conforme necessário
  }

  // Estilos para o botão
  & > li {
    margin-top: 20px;

    // Estilos para o botão
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  // Estilos para a área da imagem
  & > img {
    max-width: 100%;
    height: auto;
  }
`;
