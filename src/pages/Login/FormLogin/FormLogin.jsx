import { Envelope, Lock } from "@phosphor-icons/react";
import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SpanEsqueceuSenha, Container, Button } from "./FormLogin.styled";

import { MentorixButton } from "../../../common/Button/MentorixButton.styled";

export default function FormLogin({ onSave }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();
  function handleLogin() {
    console.log(email, senha);
    // if (email.length == 0 || email.indexOf("@") == -1) {
    //   alert("E-mail inválido");
    //   return;
    // }

    // if (senha.length < 5) {
    //   alert("Senha inválida");
    //   return;
    // }

    onSave({
      email,
      senha,
    });
  }

  // function handleLogin () {
  //     navigate("/area-mentor");
  // }

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

      <SpanEsqueceuSenha className="spanSenha">
        <p>Esqueceu sua senha? Entre em contato com suporte@mentorix.com</p>
      </SpanEsqueceuSenha>
    </Container>
  );
}
