import React from "react";
import {
  ContactContainer,
  TextContainer,
  Column,
  Card,
  SocialIcons,
  IconLink,
  Frase,
} from "./SectionContact.styled";
import { useTheme } from "styled-components";
import { TextH1, TextBody, TextH2 } from "../../../common/typography";
import { WhatsappLogo, Envelope, MapPin } from "@phosphor-icons/react";

export function SectionContact() {
  const theme = useTheme();
  return (
    <ContactContainer id="contact">
      <TextContainer>
        <TextH1 className="right-align">Entre em contato Hoje !</TextH1>
        <TextBody className="right-align">Adoraríamos ouvir você.</TextBody>
        <TextBody
          variant="body-sm"
          className="right-align"
          color={theme["blue-gray-500"]}
        >
          Nossa equipe agradece a oportunidade de responder às suas perguntas.
        </TextBody>
      </TextContainer>

      <div className="d-flex">
        <Column>
          <Card>
            <SocialIcons className="right-align">
              <WhatsappLogo
                size={50}
                color={theme["terciary-200"]}
                weight="fill"
              />
              <TextH2> WhatsApp </TextH2>

              <TextBody variant="body-sm" className="m-0">
                (41) 9 1234-5678
              </TextBody>
            </SocialIcons>
          </Card>
        </Column>

        <Column>
          <Card>
            <SocialIcons className="right-align">
              <MapPin size={50} color={theme["terciary-200"]} weight="fill" />
              <TextH2>Endereço</TextH2>
              <TextBody variant="body-sm" className="m-0">
                Emiliano Perneta, 174 Centro, Curitiba - PR, 80010-050
              </TextBody>
            </SocialIcons>
          </Card>
        </Column>

        <Column>
          <Card>
            <SocialIcons className="right-align">
              <Envelope size={50} color={theme["terciary-200"]} weight="fill" />
              <TextH2>E-mail</TextH2>
              <TextBody variant="body-sm" className="m-0">
                suporte@mentorix.com.br
              </TextBody>
            </SocialIcons>
          </Card>
        </Column>
      </div>
    </ContactContainer>
  );
}

export default SectionContact;
