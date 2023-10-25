import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Form";
import { Card, ListGroup } from "react-bootstrap";
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
} from "./FormMentor.styled";
import React from "react";
export function FormMentor() {
  return (
    <div>
      <div>
        <p>Foto (obrigatório)</p>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      <div>
        <p>Email (obrigatório)</p>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>

      <div>
        <p>Senha (obrigatório)</p>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      <div>
        <p>LinkedIn (obrigatório)</p>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      <div>
        <p>Nome completo (obrigatório)</p>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      <div>
        <p>Profissão</p>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      <div>
        <p>Profissão</p>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
      <div>
        <p>Biografia</p>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <p>O texto deve ter no máximo 400 caracteres (com espaços).</p>
      </div>

      <div>
        <p>Especialidades por áreas de atuação:</p>
      </div>
      <div style={{ display: "flex" }}>
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
      <div>
        <p>Você pode marcar mais de 1 opção.</p>
      </div>
    </div>
  );
}
