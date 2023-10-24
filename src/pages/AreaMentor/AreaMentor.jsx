import React from "react";
import { ContentContainer } from "../../common/ContentContainer.styled";
import "./AreaMentor.styled";
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
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Form";
import { Card, ListGroup } from "react-bootstrap";

const MentorProfile = {
  nome: "",
  cargo: "",
  descricao: "",
  // Outras informações do mentor
};

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
    </Container>
  );
}