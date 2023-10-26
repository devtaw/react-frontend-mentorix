import React from "react";
import { ContatoContainer, TextContainer } from "./SectionCadastro.styled";
import { TextH3, TextH2 } from "../../../common/typography";
import { useTheme } from "styled-components";

function SectionCadastro() {
  const theme = useTheme();

  return (
    <ContatoContainer>
      <TextContainer>
        <TextH3 variant={"title-xxlg"}>
          Entre em contato para se cadastrar como mentor
        </TextH3>
        <p>suporte@mentorix.com.br</p>
      </TextContainer>
    </ContatoContainer>
  );
}

export default SectionCadastro;
