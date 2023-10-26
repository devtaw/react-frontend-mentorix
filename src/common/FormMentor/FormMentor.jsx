import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Form";
import { Card, ListGroup } from "react-bootstrap";
import { TextBody } from "../../common/typography";
import { MentorixButton } from "../Button/MentorixButton.styled.js";
import { Envelope } from "@phosphor-icons/react";
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

const nome = "Seu Nome";

export function FormMentor() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Valor padrão do nome");
  const [senha, setSenha] = useState("Valor padrão da senha");
  const [linkedin, setLinkedin] = useState("Valor padrão do LinkedIn");
  const [profissao, setProfissao] = useState("Valor padrão da profissao");
  const [biografia, setBiografia] = useState("Valor padrão da biografia");
  const [email, setEmail] = useState("Valor padrão do email");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    console.log(name);
    console.log(email);

    setIsEditing(false);
  };

  return (
    <div>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
            Foto (obrigatório)
          </InputGroup.Text>
          {isEditing ? (
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          ) : (
            <p>{name}</p>
          )}
        </InputGroup>
      </div>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
            Email (obrigatório)
            <Envelope size={16} color="#4d0057" weight="fill" />
          </InputGroup.Text>
          {isEditing ? (
            <Form.Control
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              name="email"
            />
          ) : (
            <p>{email}</p>
          )}
        </InputGroup>
      </div>

      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
            Senha (obrigatório)
          </InputGroup.Text>
          {isEditing ? (
            <Form.Control
              onChange={(event) => setSenha(event.target.value)}
              value={senha}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              name="senha"
            />
          ) : (
            <p>{senha}</p>
          )}
        </InputGroup>
      </div>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
            LinkedIn (obrigatório)
          </InputGroup.Text>
          {isEditing ? (
            <Form.Control
              onChange={(event) => setLinkedIn(event.target.value)}
              value={linkedin}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              name="linkedin"
            />
          ) : (
            <p>{linkedin}</p>
          )}
        </InputGroup>
      </div>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
            Nome completo (obrigatório)
          </InputGroup.Text>
          {isEditing ? (
            <Form.Control
              onChange={(event) => setName(event.target.value)}
              value={nome}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              name="name"
            />
          ) : (
            <p>{nome}</p>
          )}
        </InputGroup>
      </div>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Profissão</InputGroup.Text>
          {isEditing ? (
            <Form.Control
              onChange={(event) => setprofissao(event.target.value)}
              value={profissao}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              name="profissao"
            />
          ) : (
            <p>{profissao}</p>
          )}
        </InputGroup>
      </div>
      <div>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Biografia</InputGroup.Text>
          {isEditing ? (
            <Form.Control
              nChange={(event) => setbiografia(event.target.value)}
              value={biografia}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              name="biografia"
            />
          ) : (
            <p>{biografia}</p>
          )}
        </InputGroup>

        <Textorodape>
          *O texto deve ter no máximo 400 caracteres (com espaços).
        </Textorodape>
      </div>

      <div>
        <p>Especialidades por áreas de atuação:</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: "18rem", marginRight: "10px" }}>
            <Card.Header>Negócios</Card.Header>
            <Card.Body>
              <Form.Check type="checkbox" label="Estratégia" id="checkbox-1" />
              <Form.Check type="checkbox" label="Finanças" id="checkbox-2" />
              <Form.Check
                type="checkbox"
                label="Investimentos"
                id="checkbox-3"
              />
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", marginRight: "10px" }}>
            <Card.Header>Comportamento</Card.Header>
            <Card.Body>
              <Form.Check
                type="checkbox"
                label="Criatividade"
                id="checkbox-1"
              />
              <Form.Check type="checkbox" label="Comunicação" id="checkbox-2" />
              <Form.Check
                type="checkbox"
                label="Produtividade"
                id="checkbox-3"
              />
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
              <Form.Check
                type="checkbox"
                label="Criptomoedas"
                id="checkbox-2"
              />
              <Form.Check
                type="checkbox"
                label="Desenvolvimento"
                id="checkbox-3"
              />
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Textorodape>*Você pode marcar mais de 1 opção.</Textorodape>
        </div>
        {!isEditing ? (
          // No modo de visualização, exibir o botão "Editar"
          <MentorixButton color={"terciary-200"} onClick={handleEditClick}>
            Editar perfil
          </MentorixButton>
        ) : (
          // No modo de edição, exibir o botão "Salvar"
          <MentorixButton color={"terciary-200"} onClick={handleSaveClick}>
            Salvar alterações
          </MentorixButton>
        )}
      </div>
    </div>
  );
}
