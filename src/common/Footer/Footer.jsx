import React from "react";
import {
  FooterContainer,
  Column,
  Logo,
  Description,
  OpeningHours,
  SocialIcons,
  CopyrightInfo,
  CopyrightText,
  IconLink,
} from "./Footer.styled";
import { CaretRight, Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { TextH2, TextBody, TextH4 } from "../typography";
import { useTheme } from "styled-components";
import logoImg from "../../assets/img/logo-footer.png";
import squadImg from "../../assets/img/logoSquad4-footer.png";
import gradFooterImg from "../../assets/img/gradiente-footer.png";

function Footer() {
  const theme = useTheme();

  const linkStyle = {
    textDecoration: "none",
    color: theme["white"],
  };

  return (
    <FooterContainer>
      <div className="d-flex">
        <Column>
          <div>
            <Logo src={logoImg} />

            <Description>
              Plataforma gratuita que conecta de forma simples e rápida mentores a pessoas que desejam ser mentoradas
            </Description>

            <TextH2> siga a gente </TextH2>

            <SocialIcons>
              <a href="https://pt-br.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FacebookLogo size={24} color={theme["terciary-200"]} weight="fill" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <InstagramLogo size={24} color={theme["terciary-200"]} weight="fill" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <LinkedinLogo size={24} color={theme["terciary-200"]} weight="fill" />
              </a>
            </SocialIcons>
          </div>
        </Column>

        <Column>
          <div>
            <TextH2> Endereço </TextH2>

            <p className="mb-1">R. Emiliano, 174 - Centro, Curitiba - PR, 80010-050</p>
            <a
              href="https://www.google.com/maps?q=R.+Emiliano,174,Centro,Curitiba,PR,80010-050"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <TextH4>Ver no Google Maps</TextH4>
            </a>
            <TextH2> Horário de atendimento </TextH2>
            <OpeningHours>
              <p className="mb-1">Segunda a sexta, 8h às 17h</p>
              <p>Sábado, domingo e feriado, 8h às 12h</p>
            </OpeningHours>
          </div>
        </Column>

        <Column>
          <TextH2> Mapa do site </TextH2>
          <IconLink>
            <CaretRight size={24} color={theme["terciary-200"]} weight="fill" />
            <Link to="/" style={linkStyle}>
              HOME
            </Link>
          </IconLink>

          <IconLink>
            <CaretRight size={24} color={theme["terciary-200"]} weight="fill" />
            <Link to="#About" style={linkStyle}>
              SOBRE NÓS
            </Link>
          </IconLink>

          <IconLink>
            <CaretRight size={24} color={theme["terciary-200"]} weight="fill" />
            <Link to="/lista-mentores" style={linkStyle}>
              MENTORES
            </Link>
          </IconLink>

          <IconLink>
            <CaretRight size={24} color={theme["terciary-200"]} weight="fill" />
            <Link to="#contact" style={linkStyle}>
              Contato
            </Link>
          </IconLink>
        </Column>

        <Column>
          <TextH2> Precisa de ajuda?</TextH2>
          <div className="icon-link mb-1">
            <a
              href="mailto:suporte@mentorix.com.br"
              style={{
                textDecoration: "none",
                color: theme["blue-gray-50"],
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Envelope size={24} color={theme["terciary-200"]} weight="fill" />
              <TextBody variant="body-sm" className="m-0">
                suporte@mentorix.com.br
              </TextBody>
            </a>
          </div>
          <div className="icon-link">
            <a
              href="tel:+41412345678"
              style={{
                textDecoration: "none",
                color: theme["blue-gray-50"],
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo size={24} color={theme["terciary-200"]} weight="fill" />
              <TextBody variant="body-sm" className="m-0">
                (41) 9 1234-5678
              </TextBody>
            </a>
          </div>
        </Column>
      </div>
      <img src={gradFooterImg} alt="Separador Gradiente" />
      <Column>
        <CopyrightInfo>
          <CopyrightText>&copy; 2023 Mentorix | Todos os direitos reservados</CopyrightText>
          <div className="d-flex">
            <TextBody variant="body-sm">Desenvolvido por</TextBody>
            <img src={squadImg} alt="Squad 4" />
          </div>
        </CopyrightInfo>
      </Column>
    </FooterContainer>
  );
}

export default Footer;
