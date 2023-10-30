import React from "react";
import sectionAboutImg from "../../../assets/img/section-about.png";
import { AboutSection, ImageContainer, TextContainer, Container } from "./SectionAbout.styled.js";
import { TextBody, TextH2 } from "../../../common/typography.js";

function SectionAbout() {
  return (
    <AboutSection id="about">
      <Container>
        <ImageContainer>
          <img src={sectionAboutImg} alt="Imagem de uma Homem sorrindo com um notebook na mão." />
        </ImageContainer>
        <TextContainer>
          <span>SOBRE A EMPRESA</span>
          <TextH2>Por que escolher a Mentorix?</TextH2>
          <TextBody>
            Temos o compromisso de fornecer mentorias de qualidade e auxiliar os profissionais a impulsionarem suas
            carreiras.
          </TextBody>
          <ul className="minha-lista">
            <li className="item-lista">Instrutores Qualificados e Especializados</li>
            <li className="item-lista">Aprendizado Interativo e Prático</li>
            <li className="item-lista">Flexibilidade e Acessibilidade</li>
          </ul>
        </TextContainer>
      </Container>
    </AboutSection>
  );
}

export default SectionAbout;
