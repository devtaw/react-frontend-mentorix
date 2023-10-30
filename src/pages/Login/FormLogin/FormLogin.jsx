import { Envelope, Lock } from "@phosphor-icons/react";
import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  SpanEsqueceuSenha,
  Container,
  Button,
  ContainerCadastreSe,
  TextH1Styled,
  TextEmail,
  StyledLabel,
} from "./FormLogin.styled";
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
      <TextH1Styled>Login</TextH1Styled>
      <StyledLabel>E-mail</StyledLabel>
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
      <StyledLabel>Senha</StyledLabel>
      <InputGroup>
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

      <SpanEsqueceuSenha>
        <TextEmail>Esqueceu sua senha?</TextEmail>
        <br /> Envie e-mail{" "}
        <Link
          className="linkEsqueceuSenha"
          to="mailto:suporte.mentorix@gmail.com"
        >
          suporte.mentorix@gmail.com
        </Link>
      </SpanEsqueceuSenha>

      <Button>
        <MentorixButton onClick={handleLogin}>Entrar</MentorixButton>
      </Button>

      <ContainerCadastreSe>
        <span>
          Ainda não possui conta? <br />
          <Link to="/cadastro" className="linkCadastro">
            Crie sua conta
          </Link>
        </span>
      </ContainerCadastreSe>
    </Container>
  );
}
