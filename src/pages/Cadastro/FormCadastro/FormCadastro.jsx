import {
  BookOpenText,
  Desktop,
  Envelope,
  Image,
  LinkedinLogo,
  Password,
  SelectionPlus,
  User,
} from "@phosphor-icons/react";
import React from "react";
import { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { MentorixButton } from "../../../common/Button/MentorixButton.styled";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";
import { Container } from "./FormCadastro.styled";

export function FormCadastro({ onSave }) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [biografia, setBiografia] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [profissao, setProfissao] = useState("");

  const snackbar = useSnackbar();
  const navigate = useNavigate();
  function handleSave() {
    if (senha !== confirmaSenha) {
      snackbar.enqueueSnackbar("As senhas devem ser iguais!");
      return;
    }
    onSave({
      nomeCompleto,
      email,
      senha,
      fotoPerfil,
      biografia,
      linkedin,
      profissao,
    });
  }

  return (
    <Container>
      <label>Foto de perfil</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
          <Image size={16} color="#673AB7" weight="fill" />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Foto de perfil"
          aria-label="Photo"
          aria-describedby="inputGroup-sizing-default"
          value={fotoPerfil}
          onChange={(e) => {
            setFotoPerfil(e.target.value);
          }}
        />
      </InputGroup>

      <label>Nome Completo</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
          <User size={16} color="#673AB7" weight="fill" />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Nome do usuário"
          aria-label="Username"
          aria-describedby="inputGroup-sizing-default"
          value={nomeCompleto}
          onChange={(e) => {
            setNomeCompleto(e.target.value);
          }}
        />
      </InputGroup>

      <label>Email</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
          {/* Aqui adiciona ícone do span */}
          <Envelope size={16} color="#673AB7" weight="fill" />
        </InputGroup.Text>
        <Form.Control
          type="email"
          placeholder="E-mail"
          aria-label="Email"
          aria-describedby="inputGroup-sizing-default"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </InputGroup>

      <label>Senha</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
          <Password size={16} color="#673AB7" weight="fill" />
        </InputGroup.Text>
        <Form.Control
          type="password"
          placeholder="Senha"
          aria-label="Password"
          aria-describedby="inputGroup-sizing-default"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />
      </InputGroup>

      <label>Confirmação senha</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
          <Password size={16} color="#673AB7" weight="fill" />
        </InputGroup.Text>
        <Form.Control
          type="password"
          placeholder="Confirmação senha"
          aria-label="Password confirm"
          aria-describedby="inputGroup-sizing-default"
          value={confirmaSenha}
          onChange={(e) => {
            setConfirmaSenha(e.target.value);
          }}
        />
      </InputGroup>

      <label>Profissão</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
          <Desktop size={16} color="#673AB7" weight="fill" />
        </InputGroup.Text>
        <Form.Control
          placeholder="Profissão"
          aria-label="Occupation"
          aria-describedby="inputGroup-sizing-default"
          value={profissao}
          onChange={(e) => setProfissao(e.target.value)}
        />
      </InputGroup>

      <label>LinkedIn</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
          <LinkedinLogo size={16} color="#673AB7" weight="fill" />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="LinkedIn"
          aria-label="LinkedIn"
          aria-describedby="inputGroup-sizing-default"
          value={linkedin}
          onChange={(e) => {
            setLinkedin(e.target.value);
          }}
        />
      </InputGroup>

      <label>Biografia</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
          <BookOpenText size={16} color="#673AB7" weight="fill" />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Biografia"
          aria-label="Biography"
          aria-describedby="inputGroup-sizing-default"
          value={biografia}
          onChange={(e) => {
            setBiografia(e.target.value);
          }}
        />
      </InputGroup>

      <MentorixButton onClick={handleSave}>Cadastrar</MentorixButton>
    </Container>
  );
}
