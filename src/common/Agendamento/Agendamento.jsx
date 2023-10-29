import React from "react";
import { CardMensagem, CardBotton, CardIcone, AgendamentoBox } from "./Agendamento.styled";
import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
import Container from "react-bootstrap/Container";

export function Agendamento() {
  return (
    <Container>
      <AgendamentoBox className="pl-5">
        <div>
          <p>Luiza Ferreira</p>
          <p>estudante</p>
          <p>luiza@mail.com</p>
        </div>
        <CardMensagem>
          Olá, tudo bem? Tenho muito interesse em fazer uma mentoria com você. Podemos marcar quando?
        </CardMensagem>
        <CardBotton>
          <CardIcone>
            <ThumbsUp size={16} color="#4d0057" weight="fill" />
          </CardIcone>
          <CardIcone>
            <ThumbsDown size={16} color="#4d0057" weight="fill" />
          </CardIcone>
        </CardBotton>
      </AgendamentoBox>
    </Container>
  );
}
