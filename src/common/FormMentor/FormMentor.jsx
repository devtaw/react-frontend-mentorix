import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Form";
import { Card, ListGroup } from "react-bootstrap";
import { TextBody } from "../../common/typography";
import { MentorixButton } from "../Button/MentorixButton.styled.js";
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
  Textorodape,

} from "./FormMentor.styled";
import React from "react";
export function FormMentor() {
function handleClick(){
  
}
  return (
    <div>
      <div>
        <p></p>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Foto (obrigatório)</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      </div>
      <div>
        <p></p>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Email (obrigatório)</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      </div>

      <div>
        
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Senha (obrigatório)</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      </div>
      <div>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">LinkedIn (obrigatório)</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      </div>
      <div>
        <InputGroup size="sm" className="mb-3" >
        <InputGroup.Text id="inputGroup-sizing-sm">Nome completo (obrigatório)</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      </div>
      <div>
      
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Profissão</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      </div>
      <div>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Biografia</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
        <Textorodape>*O texto deve ter no máximo 400 caracteres (com espaços).</Textorodape>
      </div>

      <div>
        <p>Especialidades por áreas de atuação:</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Card style={{ width: "18rem", marginRight: "10px" }}>
          <Card.Header>Negócios</Card.Header>
          <Card.Body>
            <Form.Check type="checkbox" label="Estratégia" id="checkbox-1" />
            <Form.Check type="checkbox" label="Finanças" id="checkbox-2" />
            <Form.Check type="checkbox" label="Investimentos" id="checkbox-3" />
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", marginRight: "10px" }}>
          <Card.Header>Comportamento</Card.Header>
          <Card.Body>
            <Form.Check type="checkbox" label="Criatividade" id="checkbox-1" />
            <Form.Check type="checkbox" label="Comunicação" id="checkbox-2" />
            <Form.Check type="checkbox" label="Produtividade" id="checkbox-3" />
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Header>Tecnologia</Card.Header>
          <Card.Body>
            <Form.Check
              type="checkbox"
              label="Cibersegurança"
              id="checkbox-1"
            />
            <Form.Check type="checkbox" label="Criptomoedas" id="checkbox-2" />
            <Form.Check
              type="checkbox"
              label="Desenvolvimento"
              id="checkbox-3"
            />
          </Card.Body>
        </Card>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Textorodape>*Você pode marcar mais de 1 opção.</Textorodape>
      </div>
            <MentorixButton color={"terciary-200"} onClick={handleClick}>
              Atualizar perfil
            </MentorixButton>
    </div>
    </div>
  );
}
