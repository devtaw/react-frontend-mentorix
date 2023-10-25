import React from "react";
import { ContatoContainer } from "../SectionContato/SectionContato.styled";
import { TextH1, TextH2, TextBody } from "../../../common/typography.js";
import { useTheme } from "styled-components";

function SectionContato() {
  const theme = useTheme();

  return (
    <ContatoContainer>
      <TextH1> Entre em contato hoje! </TextH1>
      <TextBody>
        <p>Adoraríamos ouvir você! </p>
        <p>Estamos aqui para responder às suas perguntas.</p>
      </TextBody>

      <div class="contact-section">
        <TextH2>E-mail</TextH2>
        <TextBody variant="body-sm" className="m-0">
          suporte@mentorix.com.br
        </TextBody>
      </div>
      <div>
        <TextH2>WhatsApp</TextH2>
        <TextBody variant="body-sm" className="m-0">
          (41) 9 1234-5678
        </TextBody>
      </div>
      <div>
        <TextH2>Endereço</TextH2>
        <TextBody variant="body-sm" className="m-0">
          Emiliano Perneta, 174 - Centro, Curitiba - PR, 80010-050
        </TextBody>
      </div>
    </ContatoContainer>
  );
}

export default SectionContato;
