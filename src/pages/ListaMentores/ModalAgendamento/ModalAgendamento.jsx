import React from "react";
import { MentorixModal } from "../../../common/MentorixModal/MentorixModal";
import { Form } from "react-bootstrap";

export function ModalAgendamento({ isModalOpen, onClose = () => null }) {
  function handleModalClose() {
    onClose();
  }

  return (
    <MentorixModal
      title="Entre em contato com o mentor"
      buttonSaveName="Enviar"
      isOpen={isModalOpen}
      onClose={handleModalClose}
      onSave={handleModalClose}
    >
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nome completo:</Form.Label>
          <Form.Control type="text" placeholder="Nome completo" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Profissão:</Form.Label>
          <Form.Control type="text" placeholder="Profissão" autoFocus />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensagem:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </MentorixModal>
  );
}
