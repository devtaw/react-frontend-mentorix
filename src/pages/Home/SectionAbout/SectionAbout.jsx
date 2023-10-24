import React from "react";
import {
  AboutSection,
  AboutTitle,
  AboutDescription,
} from "./SectionAbout.styled";
import { Button } from "../../common/Button/Button";

function SectionAbout() {
  return (
    <AboutSection>
      <AboutTitle>SOBRE A MENTORIX</AboutTitle>
      <AboutDescription>
        A Mentorix é uma plataforma de mentoria on-line dedicada a contribuir
        para o desenvolvimento de pessoas e carreiras em um ambiente
        colaborativo. Nossa missão é promover o compartilhamento de conhecimento
        e experiências entre profissionais, oferecendo uma experiência única que
        incentiva o autoconhecimento e o networking.
      </AboutDescription>
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
