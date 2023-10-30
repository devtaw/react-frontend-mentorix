import React from "react";
import {
  CardMensagem,
  CardBotton,
  CardIcone,
  Agendamentoborder,
} from "./Agendamento.styled";
import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Agendamento() {
  return (
    <Container>
      <Agendamentoborder >
      <Row>
        <Col>
          <div>
            <p>Luiza Ferreira</p>
            <p>estudante</p>
            <p>luiza@mail.com</p>
          </div>
        </Col>
        <Col className="col-6">
          <CardMensagem>
            Olá, tudo bem? Tenho muito interesse em fazer uma mentoria com você.
            Podemos marcar quando?
          </CardMensagem>
        </Col>
        <Col className="col-3 d-flex justify-content-center">
  <div className="d-flex justify-content-center align-items-center">
    <CardIcone>
      <ThumbsUp style={{ marginRight: "20px" }} size={45} color="#43A047" weight="fill" />
      <ThumbsDown style={{ marginLeft: "20px" }} size={45} color="#D32F2F" weight="fill" />
    </CardIcone>
  </div>
</Col>
      </Row>
      </Agendamentoborder>
    </Container>
  );
}
