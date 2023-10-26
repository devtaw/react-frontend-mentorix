import { Envelope, Password, User } from '@phosphor-icons/react'
import React from 'react'
import { useState } from 'react'
import { InputGroup, Form } from 'react-bootstrap'

export default function FormCadastro() {

  const [nome, setNome] = useState('') 
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')

  return (
    <div>
      
      <label>Nome</label>
      <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
    <User size={16} color="#4d0057" weight="fill" />
    </InputGroup.Text>
    <Form.Control
      placeholder="Nome do usuário"
      aria-label="Username"
      aria-describedby="inputGroup-sizing-default"
      value={nome}
      onChange={(e) => {
        setNome(e.target.value)

        if (nome.length == 0) {
          alert('Esse campo não pode estar vazio!')
        }
      }
    }

    />
  </InputGroup>

  <label>Email</label>
   <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
      {/* Aqui adiciona ícone do span */}
    <Envelope size={16} color="#4d0057" weight="fill" />
    </InputGroup.Text>
    <Form.Control
      placeholder="E-mail"
      aria-label="Email"
      aria-describedby="inputGroup-sizing-default"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value)
        
        
        }
      }
    />
  </InputGroup>

  <label>Senha</label>
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
    <Password size={16} color="#4d0057" weight="fill" />
    </InputGroup.Text>
    <Form.Control
      placeholder="Senha"
      aria-label="Password"
      aria-describedby="inputGroup-sizing-default"
      value={senha}
      onChange={(e) => {
        setSenha(e.target.value)

        if (senha.length < 6) {
          alert('A senha deve ter no mínimo 6 dígitos!')
        }
      }
    }
    />
  </InputGroup>

  <label>Confirmação senha</label>
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default" className="text-white">
    <Password size={16} color="#4d0057" weight="fill" />
    </InputGroup.Text>
    <Form.Control
      placeholder="Confirmação senha"
      aria-label="Password confirm"
      aria-describedby="inputGroup-sizing-default"
      value={confirmaSenha}
      onChange={(e) => {
        setSenha(e.target.value)

        if (confirmaSenha !== senha ) {
          alert('As senhas devem ser iguais')
        }
      }
    }
    />
  </InputGroup>
    </div>
  )
}
