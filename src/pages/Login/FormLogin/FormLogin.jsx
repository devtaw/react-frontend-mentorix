import { Envelope, Lock } from "@phosphor-icons/react";
import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SpanEsqueceuSenha, Container, Button } from "./FormLogin.styled";
import { MentorixButton } from "../../../common/Button/MentorixButton.styled";
import { useSnackbar } from "notistack";

export default function FormLogin({ onSave }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const snackbar = useSnackbar();
  const navigate = useNavigate();

  function handleLogin() {
    const formValido = validaForm();
    if (formValido) {
      onSave({ email, senha });
    }
  }

  function validaForm() {
    if (email.length === 0 || senha.length === 0) {
      snackbar.enqueueSnackbar("E-mail ou senha incorretos");
      return false;
    }
    return true;
  }

  return (
    <Container>
      <label>E-mail</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
          <Envelope size={16} color="#673AB7" weight="fill" />
        </InputGroup.Text>
        <Form.Control
          placeholder="E-mail"
          aria-label="Email"
          aria-describedby="inputGroup-sizing-default"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputGroup>
      <label>Senha</label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
          <Lock size={16} color="#673AB7" weight="fill" />
        </InputGroup.Text>
        <Form.Control
          placeholder="Senha"
          aria-label="Password"
          aria-describedby="inputGroup-sizing-default"
          type="password"
          onChange={(e) => setSenha(e.target.value)}
        />
      </InputGroup>

      <Button>
        <MentorixButton onClick={handleLogin}>Entrar</MentorixButton>
      </Button>

      <SpanEsqueceuSenha>
        <p>Esqueceu sua senha? Entre em contato com suporte@mentorix.com</p>
      </SpanEsqueceuSenha>
    </Container>
  );
}
