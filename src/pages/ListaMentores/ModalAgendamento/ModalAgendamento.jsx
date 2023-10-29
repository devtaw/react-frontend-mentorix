import React, { useState } from "react";
import { MentorixModal } from "../../../common/MentorixModal/MentorixModal";
import { Form } from "react-bootstrap";
import { useSnackbar } from "notistack";

export function ModalAgendamento({ isModalOpen, onClose = () => null }) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [profissao, setProfissao] = useState("");
  const [mensagem, setMensagem] = useState("");

  const snackbar = useSnackbar();

  function handleModalClose() {
    onClose();
  }

  function handleModalSave() {
    // valida o formulario
    if (!isFormValid()) {
      return;
    }

    onClose();
  }

  function isFormValid() {
    if (!nomeCompleto) {
      snackbar.enqueueSnackbar("Informe o nome completo", {
        variant: "warning",
      });
      return false;
    }

    if (!email) {
      snackbar.enqueueSnackbar("Informe o email", {
        variant: "warning",
      });
      return false;
    }

    if (!mensagem) {
      snackbar.enqueueSnackbar("Informe a mensagem", {
        variant: "warning",
      });
      return false;
    }

    return true;
  }

  return (
    <MentorixModal
      title="Entre em contato com o mentor"
      buttonSaveName="Enviar"
      isOpen={isModalOpen}
      onClose={handleModalClose}
      onSave={handleModalSave}
    >
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nome completo:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome completo"
            autoFocus
            onChange={(event) => setNomeCompleto(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Profissão:</Form.Label>
          <Form.Control type="text" placeholder="Profissão" onChange={(event) => setProfissao(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensagem:</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(event) => setMensagem(event.target.value)} />
        </Form.Group>
      </Form>
    </MentorixModal>
  );
}
