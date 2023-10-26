import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
// import { User } from "@phosphor-icons/react";

export default function FormLogin({usuario, setUsuario, senha, setSenha}) {

    const navigate = useNavigate();

    function handleLogin () {
        navigate("/area-mentor");
    }



  return (

    <div>
      <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
        
    </InputGroup.Text>
    <Form.Control
      placeholder="Nome do usuário"
      aria-label="Username"
      aria-describedby="inputGroup-sizing-default"      
      onChange={(e) => setUsuario(e.target.value)}
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default" className="text-white">Nome - </InputGroup.Text>
    <Form.Control
      placeholder="Senha"
      aria-label="Password"
      aria-describedby="inputGroup-sizing-default"
      onChange={(e) => setSenha(e.target.value)}
    />
  </InputGroup>

  <span>Esqueceu sua senha?</span>

  

   

    </div>
  )
}
