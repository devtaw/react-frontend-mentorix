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
} from "./Footer.styled";
import {
  CaretRight,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { TextH2, TextBody } from "../typography";
function Footer() {
  return (
    <FooterContainer>
      <div className="d-flex">
        <Column>
          <div>
            <Logo src="../src/assets/img/logo-footer.png" />

            <Description>
              Plataforma gratuita que conecta de forma simples e rápida mentores
              a pessoas que desejam ser mentoradas
            </Description>

            <TextH2> siga a gente </TextH2>

            <SocialIcons>
              <a href="link-do-facebook">
                <FacebookLogo size={32} color="#f4ef8c" />
              </a>
              <a href="link-do-instagram">
                <InstagramLogo size={32} color="#f4ef8c" />
              </a>
              <a href="link-do-linkedin">
                <LinkedinLogo size={32} color="#f4ef8c" />
              </a>
            </SocialIcons>
          </div>
        </Column>

        <Column>
          <div>
            <TextH2> endereço </TextH2>
            <p>Rua Emiliano Perneta, 174 - Centro, Curitiba - PR, 80010-050</p>
          </div>
          <div>
            <TextH2> horário de atendimento </TextH2>
            <OpeningHours>
              <p>Segunda a sexta-feira, 8h às 17h</p>
              <p>Sábado, domingo e feriado, 8h às 12h</p>
            </OpeningHours>
          </div>
        </Column>

        <Column>
          <div>
            <TextH2> mapa do site </TextH2>
            <div className="icon-link">
              <CaretRight size={20} color="#f4ef8c" weight="fill" />
              <Link href="/">Home</Link>
            </div>
            <div className="icon-link">
              <CaretRight size={20} color="#f4ef8c" weight="fill" />
              <Link href="/sobre">Sobre Nós</Link>
            </div>
            <div className="icon-link">
              <CaretRight size={20} color="#f4ef8c" weight="fill" />
              <Link href="/mentores">Mentores</Link>
            </div>
            <div className="icon-link">
              <CaretRight size={20} color="#f4ef8c" weight="fill" />
              <Link href="/contato">Contato</Link>
            </div>
          </div>
        </Column>

        <Column>
          <TextH2> precisa de ajuda?</TextH2>
          <div className="icon-link">
            <Envelope size={32} color="#f4ef8c" />
            <p>suporte@mentorix.com.br</p>
          </div>
          <div className="icon-link">
            <WhatsappLogo size={32} color="#f4ef8c" />
            <p>(41) 9 1234-5678</p>
          </div>
        </Column>
      </div>
      <img
        src="../src/assets/img/gradiente-footer.png"
        alt="Separador Gradiente"
      />
      <Column>
        <CopyrightInfo>
          <CopyrightText>
            &copy; 2023 Mentorix | Todos os direitos reservados
          </CopyrightText>
          <div className="imagens">
            <TextBody variant="body-sm">desenvolvido por</TextBody>
            <img src="../src/assets/img/logoSquad4-footer.png" alt="Squad 4" />
          </div>
        </CopyrightInfo>
      </Column>
    </FooterContainer>
  );
}

export default Footer;
