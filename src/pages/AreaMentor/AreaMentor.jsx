import React from "react";
import { Container, Row2, Avatar, TextH1Mentor, TextH5Mentor, TextH6Mentor,  TextDescriptionMentor } from "./AreaMentor.styled";
import bg from "../../assets/img/div-capa-areaMentor.png";
import { Form } from "react-bootstrap";
import { FormMentor } from "../../common/FormMentor/FormMentor";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import { TextBody } from "../../common/typography";

export function AreaMentor() {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-12"></div>
        </div>
        <Row2 img="src/assets/img/div-capa-areaMentor.png">
          <div className="col-12"></div>
        </Row2>
        <Avatar img="src/assets/img/perfil-mentor.png"></Avatar>
      </div>
      <div>
        <div>
      <TextH1Mentor >Seja bem-vindo (a)!</TextH1Mentor></div>
      <TextH5Mentor>
        Aqui na você pode <span TextH5cor>Área do Mentor</span>
        editar seu perfil e visualizar as solicitações de mentoria recebidas
        podendo fazer o aceite ou recusa delas.
      </TextH5Mentor>
      
      <TextH6Mentor> Solicitações de agendamento recebidas </TextH6Mentor>
      <div className="TextDescriptionMentor">
      <TextBody variant={"body-sm"}>
        Aceite ou recuse suas solicitações e você e o mentorado vão receber um
        e-mail.
      </TextBody>
      </div>
      </div>
      <hr />
      <TextDescriptionMentor>Perfil</TextDescriptionMentor>
      <TextDescriptionMentor>Dados Pessoais</TextDescriptionMentor>
      
      <FormMentor />
    </Container>
  );
}
