import React from "react";
import { AboutSection } from "./SectionAbout.styled.js";
import { TextH1, TextH2 } from "../../../common/typography.js";

function SectionAbout() {
  return (
    <AboutSection>
      <TextH1>SOBRE</TextH1>
      <TextH2>
        A Mentorix é uma plataforma de mentoria on-line dedicada a contribuir
        para o desenvolvimento de pessoas e carreiras em um ambiente
        colaborativo. Nossa missão é promover o compartilhamento de conhecimento
        e experiências entre profissionais, oferecendo uma experiência única que
        incentiva o autoconhecimento e o networking.
      </TextH2>
      <textH1>
        Junte-se a nós nesta emocionante jornada de crescimento e descobertas.
      </textH1>
    </AboutSection>
  );
}

export default SectionAbout;
