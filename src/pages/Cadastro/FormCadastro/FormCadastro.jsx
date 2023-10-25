import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'

export default function FormCadastro() {
  return (
    <div>
      <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default" className="text-white">Nome - </InputGroup.Text>
    <Form.Control
      placeholder="Nome do usuário"
      aria-label="Username"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <Form.Control
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <Form.Control aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>.00</InputGroup.Text>
  </InputGroup>

  <InputGroup>
    <InputGroup.Text>With textarea</InputGroup.Text>
    <Form.Control as="textarea" aria-label="With textarea" />
  </InputGroup>
    </div>
  )
}
