import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Form";
import { Card, ListGroup } from "react-bootstrap";
import { TextBody } from "../../common/typography";
import { MentorixButton } from "../Button/MentorixButton.styled.js";
import { Envelope, Password, GooglePhotosLogo,LinkedinLogo,IdentificationBadge,ShareNetwork, Note } from "@phosphor-icons/react";
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

const nome = "Luck ";

export function FormMentor() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState("Luck Starwalker");
  const [senha, setSenha] = useState("*******");
  const [linkedin, setLinkedin] = useState("www.linkedin/in/luckstarwars");
  const [profissao, setProfissao] = useState("Desenvolvedor");
  const [biografia, setBiografia] = useState("Luck é um senador dedicada e experiente, conhecida por sua abordagem colaborativa na política. Sua carreira começou como advogada, lutando pelos direitos civis e sociais. Como senadora, ela prioriza questões como saúde acessível, educação de qualidade e igualdade de gênero. luck é uma forte defensora da justiça social e do meio ambiente. Sua paixão pela igualdade e seu compromisso com o serviço público a tornam uma líder respeitada.");
  const [email, setEmail] = useState("luckstarwalker@gmail.com");

  const handleEditClick = () => {
    setIsDisabled(false);
  };

  const handleSaveClick = () => {
    console.log(name);
    console.log(email);

    setIsDisabled(true);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
       {isDisabled ? (
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
        <hr />
      <div>
          
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
          <GooglePhotosLogo size={16} color="#4d0057" weight="fill" />
          <label className="ms-2">Foto </label>
          </InputGroup.Text>
            <Form.Control
              disabled={isDisabled}
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
        </InputGroup>
      </div>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
          <Envelope size={16} color="#4d0057" weight="fill" />
          <span className="ms-2"> Email (obrigatório)</span>
          </InputGroup.Text>
            <Form.Control
              disabled={isDisabled}
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
        </InputGroup>
      </div>

      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
          <Password size={16} color="#4d0057" weight="fill" />
          <span className="ms-2">  Senha (obrigatório)</span>
          </InputGroup.Text>
            <Form.Control
              disabled={isDisabled}
              onChange={(event) => setSenha(event.target.value)}
              value={senha}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
        </InputGroup>
      </div>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
          <LinkedinLogo size={16} color="#4d0057" weight="fill" />
          <span className="ms-2">   LinkedIn (obrigatório)</span>
          </InputGroup.Text>
            <Form.Control
              disabled={isDisabled}
              onChange={(event) => setLinkedIn(event.target.value)}
              value={linkedin}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
        </InputGroup>
      </div>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
          <IdentificationBadge size={16} color="#4d0057" weight="fill" />
          <span className="ms-2">  Nome completo (obrigatório)</span>
          </InputGroup.Text>
            <Form.Control
              onChange={(event) => setName(event.target.value)}
              value={nome}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              disabled={isDisabled}
            />
        </InputGroup>
      </div>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
          <ShareNetwork size={16} color="#4d0057" weight="fill" />
          <span className="ms-2"> Profissão</span>
          </InputGroup.Text>
            <Form.Control
              onChange={(event) => setName(event.target.value)}
              value={nome}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              disabled={isDisabled}
            />
        </InputGroup>
      </div>

      <div>
      <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
          <Note size={16} color="#4d0057" weight="fill" />
          <span className="ms-2"> Biografia</span>
            </InputGroup.Text>
            <Form.Control
              nChange={(event) => setbiografia(event.target.value)}
              value={biografia}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              disabled={isDisabled}
            />
        </InputGroup>

        <Textorodape>
          *O texto deve ter no máximo 400 caracteres (com espaços).
        </Textorodape>
      </div>

      <div>
        <p><strong>Especialidades por áreas de atuação:</strong></p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: "18rem", marginRight: "10px" }}>
            <Card.Header> <strong>Negócios</strong></Card.Header>
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
            <Card.Header> <strong> Comportamento</strong></Card.Header>
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
            <Card.Header> <strong>Tecnologia </strong></Card.Header>
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
       
      </div>
    </div>
  );
}
