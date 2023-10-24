import React from "react";
import { AboutSection } from "./SectionAbout.styled";
import { Button } from "../../common/Button/Button";
import { TextH1, TextH2 } from "../typography";

function SectionAbout() {
  return (
    <AboutSection>
      <TextH1>SOBRE A MENTORIX</TextH1>
      <TextH2>
        A Mentorix é uma plataforma de mentoria on-line dedicada a contribuir
        para o desenvolvimento de pessoas e carreiras em um ambiente
        colaborativo. Nossa missão é promover o compartilhamento de conhecimento
        e experiências entre profissionais, oferecendo uma experiência única que
        incentiva o autoconhecimento e o networking.
      </TextH2>
      <ul>
        <li>
          <Button
            texto="CADASTRE-SE AGORA"
            variant="primary"
            onClick={handleClick}
          />
        </li>
        <li>
          <Button
            texto="LISTA DE MENTORES"
            variant="primary"
            onClick={handleClick}
          />
        </li>
      </ul>
    </AboutSection>
  );
}

export default SectionAbout;
