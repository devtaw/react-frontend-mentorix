import { SpeakerNone } from "@phosphor-icons/react";
import styled from "styled-components";
import { ContentContainer } from "../../../common/ContentContainer.styled";

export const Container = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 60px 0;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(p) => p.theme["background-dark"]};
  color: ${(p) => p.theme["secondary-50"]};
  padding: 80px;

  h1 {
    color: ${(p) => p.theme["blue-gray-50"]};
    line-height: normal;
    letter-spacing: -0.48px;
  }

  h2 {
    color: ${(p) => p.theme["blue-a400"]};
    line-height: normal;
    letter-spacing: -0.48px;
  }
`;

export const TextContainer = styled.div`
  text-align: left;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
  align-items: center;
  flex-grow: 1;
  height: 300px;
  width: 200px;
  &:last-child {
    display: initial;
  }
`;
export const Card = styled.div`
  background: ${(p) => p.theme["primary-900"]};
  border: 1px solid #fff59d;
  padding: 30px;
  text-align: center;
  border-radius: 10px;
  color: ${(p) => p.theme["blue-gray-50"]};
  display: flex;
  flex-direction: column; /* Alinha o conteúdo verticalmente */
  justify-content: space-between; /* Espaço igual entre os elementos internos */
  align-items: center; /* Alinha o conteúdo horizontalmente */
  width: 250px;
  height: 250px; /* Ajuste a altura como desejado */
  min-height: 250px; /* Evita que os cartões se tornem menores do que o desejado */

  h4 {
    color: ${(p) => p.theme["green-500"]};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 10px;

  a {
    color: ${(p) => p.theme["blue-gray-800"]};
    font-family: Open Sans;
    text-decoration: none;
    align-items: center;
  }
`;

export const IconLink = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  a {
    display: flex;
    align-items: center;
    margin: 10px 0;
    color: ${(p) => p.theme["blue-gray-500"]} !important;
    font-family: Open Sans;
    text-decoration: none;
  }
`;

export const Logo = styled.img`
  width: 141px;
  height: 50px;
  flex-shrink: 0;
`;
export const Frase = styled.p`
  background-color: transparent !important;
  text-align: right; /* Alinhe todo o texto à direita */
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
  width: 100%;
  height: 100px;
  margin-top: auto;
  color: ${(p) => p.theme["white"]};

  p {
    background-color: transparent;
    margin: 10px 0;
    color: ${(p) => p.theme["secondary-100"]} !important;
    font-family: Open Sans;
    text-decoration: none;
  }
`;
