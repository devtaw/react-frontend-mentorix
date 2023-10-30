import React from "react";
import { WelcomeContainer, TextContainer, ImageContainer, Container } from "./SectionWelcome.styled";
import { TextBody, TextH1 } from "../../../common/typography";
import { useTheme } from "styled-components";
import { MentorixButton } from "../../../common/Button/MentorixButton.styled";
import { useNavigate } from "react-router-dom";
import image from "../../../assets/img/section-welcome.png";

function SectionWelcome() {
  const navigate = useNavigate();
  const theme = useTheme();

  function handleClick() {
    navigate("/lista-mentores");
  }

  return (
    <WelcomeContainer>
      <Container>
        <TextContainer>
          <span>MENTORES ESPECIALIZADOS </span>
          <TextH1 variant={"title-xxlg"}>Mude sua vida! Escolha Mentorix</TextH1>
          <TextBody variant={"body-xsm"}>
            Transforme sua carreira com nossa plataforma de mentoria. Conhecimento compartilhado, futuro assegurado.
          </TextBody>

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
