import { Envelope, Lock } from "@phosphor-icons/react";
import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SpanEsqueceuSenha } from "./FormLogin.styled";
import { MentorixButton } from "../../../common/Button/MentorixButton.styled";

export default function FormLogin({ email, setEmail, senha, setSenha }) {
  // const [email, setEmail] = useState('')
  // const [senha, setSenha] = useState('')

  function handleLogin(e) {
    e.preventDefault();

    if (email.length == 0 || email.indexOf("@") === -1) {
      alert("E-mail inválido");
      return;
    }

    if (senha.length < 5) {
      alert("E-mail inválido");
      return;
    }

    navigate("/area-mentor");
  }

  const navigate = useNavigate();

  // function handleLogin () {
  //     navigate("/area-mentor");
  // }

  return (
    <div>
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
          //   onChange={(e) => setUsuario(e.target.value)}
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
          //   onChange={(e) => setSenha(e.target.value)}
        />
      </InputGroup>

      <MentorixButton onClick={handleLogin}>Entrar</MentorixButton>

      <SpanEsqueceuSenha className="spanSenha">
        <p>Esqueceu sua senha? Entre em contato com suporte@mentorix.com</p>
      </SpanEsqueceuSenha>
    </div>
  );
}
