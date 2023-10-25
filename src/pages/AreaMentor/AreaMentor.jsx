import React from "react";
import { ContentContainer } from "../../common/ContentContainer.styled";
import "./AreaMentor.styled";
import { useState } from 'react';
import {
  MentorDescription,
  MentorName,
  MentorPosition,
  Container,
  Row2,
  Avatar,
  Agendamento,
  CardAvatar,
  CardMensagem,
  CardIcone,
  CardBotton,
  Fundocomcor,
} from "./AreaMentor.styled";
import bg from "../../assets/img/div-capa-areaMentor.png";
import { Form } from "react-bootstrap";
import { FormMentor } from "../../common/FormMentor/FormMentor";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';




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
      <h1>Seja bem-vindo (a)!</h1>
      <h3>
        Aqui na Área do Mentor você pode editar seu perfil e visualizar as
        solicitações de mentoria recebidas podendo fazer o aceite ou recusa
        delas.
      </h3>
      <p> Solicitações de agendamento recebidas </p>
      <p>
        Aceite ou recuse suas solicitações e você e o mentorado vão receber um
        e-mail.
      </p>
      <hr />
      <Agendamento>
        <CardAvatar src="src/assets/img/perfil-mentor.png" alt="" />
        <div>
          <p>Luiza Ferreira</p>
          <p>estudante</p>
          <p>luiza@mail.com</p>
        </div>
        <CardMensagem>
          Olá, tudo bem? Tenho mto interesse em fazer uma mentoriacom você.
          Podemos marcar quando?
        </CardMensagem>
        <CardBotton>
          <CardIcone></CardIcone>
          <CardIcone></CardIcone>
        </CardBotton>
      </Agendamento>
      <Agendamento>
        <CardAvatar src="src/assets/img/perfil-mentor.png" alt="" />
        <div>
          <p>Luiza Ferreira</p>
          <p>estudante</p>
          <p>luiza@mail.com</p>
        </div>
        <CardMensagem>
          Olá, tudo bem? Tenho mto interesse em fazer uma mentoriacom você.
          Podemos marcar quando?
        </CardMensagem>
        <CardBotton>
          <CardIcone></CardIcone>
          <CardIcone></CardIcone>
        </CardBotton>
      </Agendamento>

      <h6 className="Fundocomcor">MODO VISUALIZAÇÃO</h6>
      <p>Perfil</p>

      <p>Clique aqui para editar seu perfil.</p>
    
      <hr />
      
      <FormMentor/>
     
    </Container>
  );
}