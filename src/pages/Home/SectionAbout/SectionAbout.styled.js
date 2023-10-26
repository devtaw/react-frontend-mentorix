import styled from "styled-components";

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
  flex: 1;
  img {
    width: 80%;
    max-width: 80%;
  }
`;

// import styled from "styled-components";

// export const AboutSection = styled.section`
//   display: flex;

//   flex-direction: column;
//   justify-content: space-between;
//   color: ${(p) => p.theme["blue-gray-500"]};
//   padding: 50px;

//   h2 {
//     color: ${(p) => p.theme["secondary-400"]};
//     line-height: normal;
//     letter-spacing: -0.48px;
//   }

//   h1 {
//     color: ${(p) => p.theme["secondary-400"]};
//     line-height: normal;
//     letter-spacing: -0.48px;
//   }
// `;

// export const ImageContainer = styled.div`
//   justify-content: flex-end;
//   flex: 1;

//   img {
//     max-width: 100%;
//     height: auto;
//   }
// `;
