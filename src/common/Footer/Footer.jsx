import React from "react";
import * as S from "./FooterStyles";
import { Link } from "react-router-dom";
import {
  CaretRight,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
function Footer() {
  return (
    <S.Container>
      <div className="content">
        <S.Column>
          <div>
            <S.Logo src="../src/assets/img/logo-footer.png" />

            <S.Description>
              Plataforma gratuita que conecta de forma simples e rápida mentores
              a pessoas que desejam ser mentoradas
            </S.Description>

            <h2>siga a gente </h2>

            <S.SocialIcons>
              <a href="link-do-facebook">
                <FacebookLogo size={32} color="#f4ef8c" />
              </a>
              <a href="link-do-instagram">
                <InstagramLogo size={32} color="#f4ef8c" />
              </a>
              <a href="link-do-linkedin">
                <LinkedinLogo size={32} color="#f4ef8c" />
              </a>
            </S.SocialIcons>
          </div>
        </S.Column>

        <S.Column>
          <div>
            <h2>endereço</h2>
            <p>Rua Emiliano Perneta, 174 - Centro, Curitiba - PR, 80010-050</p>
          </div>
          <div>
            <h2>horário de atendimento</h2>
            <S.OpeningHours>
              <p>Segunda a sexta-feira, 8h às 17h</p>
              <p>Sábado, domingo e feriado, 8h às 12h</p>
            </S.OpeningHours>
          </div>
        </S.Column>