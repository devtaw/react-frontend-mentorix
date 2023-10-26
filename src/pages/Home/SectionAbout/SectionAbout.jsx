import React from "react";
import sectionAboutImg from "../../../assets/img/section-about.png";
import {
  AboutSection,
  ImageContainer,
  TextContainer,
} from "./SectionAbout.styled.js";
import { TextH1, TextH3, TextH6 } from "../../../common/typography.js"; // Certifique-se de importar TextH6

function SectionAbout() {
  return (
    <AboutSection id="about">
      <ImageContainer>
        <img
          src={sectionAboutImg}
          alt="Imagem de uma Homem sorrindo com um notebook na mão."
        />
      </ImageContainer>
      <TextContainer>
        <TextH6>SOBRE A EMPRESA</TextH6>
        <TextH1>Por que estudantes escolhem o Mentorix para aprender?</TextH1>
        <TextH3>
          Temos o compromisso de fornecer ensino de qualidade e ser uma
          referência em auxiliar os profissionais a adquirirem novas habilidades
          e a impulsionarem o desenvolvimento de suas carreiras.
        </TextH3>
        <ul className="minha-lista">
          <li className="item-lista">
            Instrutores Qualificados e Especializados
          </li>
          <li className="item-lista">Aprendizado Interativo e Prático</li>
          <li className="item-lista">Flexibilidade e Acessibilidade</li>
        </ul>
      </TextContainer>
    </AboutSection>
  );
}

export default SectionAbout;
