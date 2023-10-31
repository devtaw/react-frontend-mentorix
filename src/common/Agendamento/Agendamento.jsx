import React from "react";
import { CardMensagem, CardIcone, Agendamentoborder, ButtonAceite } from "./Agendamento.styled";
import { useSnackbar } from "notistack";
import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { putAgendamento } from "../../common/services/AgendamentoService";
import { useTheme } from "styled-components";

export function Agendamento({ idDoAgendamento, nomeCompleto, email, mensagem, profissao }) {
  const snackbar = useSnackbar();
  const theme = useTheme();

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
      await putAgendamento(idAgendamento, agendamento);
      snackbar.enqueueSnackbar("Aceite atualizado com sucesso", {
        variant: "success",
      });
    } catch (error) {
      snackbar.enqueueSnackbar("Erro ao atualizar o aceite", {
        variant: "error",
      });
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
            <CardMensagem>{mensagem}</CardMensagem>
          </Col>
          <Col className="col-3 d-flex justify-content-center">
            <div className="d-flex justify-content-center align-items-center">
              <CardIcone>
                <ButtonAceite>
                  <ThumbsUp
                    style={{ marginRight: "20px", cursor: "pointer" }}
                    size={45}
                    color={theme["green-500"]}
                    weight="fill"
                    onClick={handleThumbsUpClick}
                  />
                </ButtonAceite>
                <ButtonAceite>
                  <ThumbsDown
                    style={{ marginRight: "20px", cursor: "pointer" }}
                    size={45}
                    color={theme["red-600"]}
                    weight="fill"
                    onClick={handleThumbsDownClick}
                  />
                </ButtonAceite>
              </CardIcone>
            </div>
          </Col>
        </Row>
      </Agendamentoborder>
    </Container>
  );
}
