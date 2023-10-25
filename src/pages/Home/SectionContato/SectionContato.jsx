import React from "react";
import { ContatoContainer } from "../SectionContato/SectionContato.styled";
import { TextH1, TextH2, TextBody } from "../../../common/typography.js";
import { useTheme } from "styled-components";
import { WhatsappLogo, Envelope, MapPin } from "@phosphor-icons/react";

function SectionContato() {
  const theme = useTheme();

  return (
    <ContatoContainer>
      <TextH1> Entre em contato ! </TextH1>
      <TextBody>
        <p>Adoraríamos ouvir você! </p>
        <p>Estamos aqui para responder às suas perguntas.</p>
      </TextBody>

      <div class="d.flex">
        <TextH2>E-mail</TextH2>
        <TextBody variant="body-sm" className="m-0">
          <Envelope size={32} color={theme["terciary-200"]} weight="fill" />
          suporte@mentorix.com.br
        </TextBody>
      </div>
      <div>
        <TextH2>WhatsApp</TextH2>
        <TextBody variant="body-sm" className="m-0">
          <WhatsappLogo size={32} color={theme["terciary-200"]} weight="fill" />
          (41) 9 1234-5678
        </TextBody>
      </div>
      <div>
        <TextH2>Endereço</TextH2>
        <TextBody variant="body-sm" className="m-0">
          <MapPin size={32} color={theme["terciary-200"]} weight="fill" />
          Emiliano Perneta, 174 - Centro, Curitiba - PR, 80010-050
        </TextBody>
      </div>
    </ContatoContainer>
  );
}

export default SectionContato;
