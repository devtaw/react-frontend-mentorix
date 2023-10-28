import React from "react";
import { WelcomeContainer, TextContainer, ImageContainer, Container } from "./SectionWelcome.styled";
import { TextH1, TextH2, TextH6 } from "../../../common/typography";
import { useTheme } from "styled-components";
import { MentorixButton } from "../../../common/Button/MentorixButton.styled";
import { Link } from "react-router-dom";
import { ContentContainer } from "../../../common/ContentContainer.styled";
import image from "../../../assets/img/section-welcome.png";

function SectionWelcome() {
  const theme = useTheme();
  return (
    <WelcomeContainer>
      <Container>
        <TextContainer>
          <TextH6>MENTORES ESPECIALIZADOS </TextH6>
          <TextH1 variant={"title-xxlg"}>Mude sua vida! Escolha Mentorix</TextH1>
          <TextH2 variant={"body-xsm"}>
            Transforme sua carreira com nossa plataforma de mentoria. Conhecimento compartilhado, futuro assegurado.
          </TextH2>

          <MentorixButton color={"terciary-200"} onClick={handleClick} className="mt-4">
            Conheça os Mentores
          </MentorixButton>
        </TextContainer>
        <ImageContainer>
          <img src={image} alt="Imagem de seis pessoas, para referenciar os Mentores." />
        </ImageContainer>
      </Container>
    </WelcomeContainer>
  );
}

export default SectionWelcome;
