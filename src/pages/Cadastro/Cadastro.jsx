import React from "react";
import { ContentContainer } from "../../common/ContentContainer.styled";
import { Form } from "react-bootstrap";
import { TextH1 } from "../../common/typography";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { defaultTheme } from "styled-components";

export function Cadastro() {
  return (
    <ContentContainer>
      <div>
      <TextH1 color="secondary-700" variant="title-xsm">Cadastro</TextH1>
      <Form>
      <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Nome - </InputGroup.Text>
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
      </Form>
      </div>
    </ContentContainer>
  );
}
