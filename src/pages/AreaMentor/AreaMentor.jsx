import React from "react";
import {
  Container,
  Row2,
  Avatar,
  TextH1Mentor,
  TextH5Mentor,
  TextH6Mentor,
  TextDescriptionMentor,
} from "./AreaMentor.styled";
import bg from "../../assets/img/div-capa-areaMentor.png";
import { Form } from "react-bootstrap";
import { FormMentor } from "../../common/FormMentor/FormMentor";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import { TextBody } from "../../common/typography";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import imgCapaAreaMentor from "../../assets/img/div-capa-areaMentor.png";
import imgMentor from "../../assets/img/perfil-mentor.png";

export function AreaMentor() {
  return (
    <>
      <Header />
      <Container>
        <div className="container mb-5">
          <div className="row">
            <div className="col-12"></div>
          </div>
          <img src={imgCapaAreaMentor} alt="" />
          {/* <Row2 img="../../assets/img/div-capa-areaMentor.png">
            <div className="col-12"></div>
          </Row2> */}
          <Avatar>
            <img src={imgMentor} alt="foto do mentor" />
          </Avatar>

          <div>
            <div>
              <TextH1Mentor className="mb-5 mt-5">Seja bem-vindo (a)!</TextH1Mentor>
            </div>

            <TextH5Mentor className="mb-4 mt-3">Aqui na Área do Mentor você pode editar seu perfil.</TextH5Mentor>
            {/* <TextDescriptionMentor className="mb-4 mt-4"> Receba solicitações de agendamento através do seu email cadastrado em nossa plataforma. Tenha o controle total para aceitar ou recusar mentorias, proporcionando um serviço personalizado aos seus mentorados. Além disso, ofereça a possibilidade de marcar uma conversa inicial para compreender as necessidades e expectativas dos seus mentorados, estabelecendo assim um sólido relacionamento de mentoria. </TextDescriptionMentor> */}
          </div>
          <hr />
          <TextDescriptionMentor>
            {" "}
            <strong>Perfil Mentor (Dados Pessoais): </strong>
          </TextDescriptionMentor>

          <FormMentor />
        </div>
      </Container>
      <Footer />
    </>
  );
}
