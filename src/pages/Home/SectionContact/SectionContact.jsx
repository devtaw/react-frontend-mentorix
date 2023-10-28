import React from "react";
import {
  ContactContainer,
  TextContainer,
  Column,
  Card,
  SocialIcons,
  IconLink,
  Frase,
  Container,
} from "./SectionContact.styled";
import { useTheme } from "styled-components";
import {
  TextH1,
  TextBody,
  TextH2,
  TextH6,
  TextH4,
} from "../../../common/typography";
import { WhatsappLogo, Envelope, MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom"; // Importe o Link do React Router

export function SectionContact() {
  const theme = useTheme();

  // Estilo para remover o sublinhado de links
  const linkStyle = {
    textDecoration: "none",
    color: theme["white"],
  };

  return (
    <ContactContainer id="contact">
      <Container>
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

        <div className="d-flex w-100">
          <Column>
            <Card>
              <a href="https://www.whatsapp.com/" style={linkStyle}>
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
              </a>
            </Card>
          </Column>

          <Column>
            <Card>
              <SocialIcons className="right-align">
                <MapPin size={50} color={theme["terciary-200"]} weight="fill" />
                <TextH2>Endereço</TextH2>
                <a
                  href="https://www.google.com/maps?q=R.+Emiliano,174,Centro,Curitiba,PR,80010-050"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  <TextH4>Ver no Google Maps</TextH4>
                </a>
                <TextBody variant="body-sm" className="m-0">
                  R. Emiliano, 174 - Centro, Curitiba - PR, 80010-050
                </TextBody>
              </SocialIcons>
            </Card>
          </Column>

          <Column>
            <Card>
              <a href="mailto:suporte@mentorix.com.br" style={linkStyle}>
                <SocialIcons className="right-align">
                  <Envelope
                    size={50}
                    color={theme["terciary-200"]}
                    weight="fill"
                  />
                  <TextH2>E-mail</TextH2>
                  <TextBody variant="body-sm" className="m-0">
                    suporte@mentorix.com.br
                  </TextBody>
                </SocialIcons>
              </a>
            </Card>
          </Column>
        </div>
      </Container>
    </ContactContainer>
  );
}

export default SectionContact;
