import styled from "styled-components";
import { TextH1 } from "../../../common/typography";

export const SpanEsqueceuSenha = styled.div`
    font-size: 12px;
    margin-top: 8px;
`

export const Container = styled.div`
  margin: 0 auto;
  width: 25rem;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #fff;
  padding: 16px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.5);

  .linkCadastro {
    text-decoration: none;
  }

  .linkEsqueceuSenha {
    text-decoration: none;
  }
`;

export const Button = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
  `


export const ContainerCadastreSe = styled.div`
width: 100%;
text-align: center;
margin-top: 16px;

`

export const TextH1Styled = styled(TextH1)`
font-size: 52px;
text-align: center;
font-weight: bold;
margin: 2.5rem;
`