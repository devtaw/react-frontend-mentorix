import React, { useState } from "react";
import {
  CardMensagem,
  CardIcone,
  Agendamentoborder,
} from "./Agendamento.styled";
import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { putAgendamento } from "../../common/services/AgendamentoService";

export function Agendamento({ idDoAgendamento, nomeCompleto, email, mensagem, profissao, }) {
  const handleThumbsUpClick = async () => {
    await atualizarAceite(idDoAgendamento, true);
  };

  const handleThumbsDownClick = async () => {
    await atualizarAceite(idDoAgendamento, false);
  };

  async function atualizarAceite(idAgendamento, aceite) {
    const agendamento = {
      aceite: aceite,
    };

    try {
      const resposta = await putAgendamento(idAgendamento, agendamento);
      console.log("Aceite atualizado com sucesso:", resposta);
    } catch (error) {
      console.error("Erro ao atualizar o aceite:", error);
    }
  }
  
  return (
    <Container>
      <Agendamentoborder>
        <Row>
          <Col>
            <div>
              <p>{nomeCompleto}</p>
              <p>{profissao}</p>
              <p>{email}</p>
            </div>
          </Col>
          <Col className="col-6">
            <CardMensagem>
            {mensagem}
            </CardMensagem>
          </Col>
          <Col className="col-3 d-flex justify-content-center">
            <div className="d-flex justify-content-center align-items-center">
              <CardIcone>
                <ThumbsUp
                  style={{ marginRight: "20px" }}
                  size={45}
                  color="#43A047"
                  weight="fill"
                  onClick={handleThumbsUpClick}
                />

                <ThumbsDown
                  style={{ marginLeft: "20px" }}
                  size={45}
                  color="#D32F2F"
                  weight="fill"
                  onClick={handleThumbsDownClick}
                />
              </CardIcone>
            </div>
          </Col>
        </Row>
      </Agendamentoborder>
    </Container>
  );
}
