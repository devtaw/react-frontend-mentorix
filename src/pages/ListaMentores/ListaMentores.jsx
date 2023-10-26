import React, { useState } from "react";
import { ContentContainer } from "../../common/ContentContainer.styled";
import { ContainerList, ContentSection, SpanTitle, TextDescription, Title } from "./ListaMentores.styled";
import { CardMentor } from "./CardMentor/CardMentor";
import { MentorixModal } from "../../common/MentorixModal/MentorixModal";
import { Form } from "react-bootstrap";
import { useQuery } from "react-query;";
import { getMentores } from "../../common/services/MentorService";

export function ListaMentores() {
  //cria estado p/ guardar se modal estar aberta ou fechada
  const [isModalOpen, setIsModalOpen] = useState(false);
  //data é preenchido quando a query retorna um resultado e isLoading será true quando a query estiver sendo executada
  const { data, isLoading } = useQuery("lista-mentores", getMentores);

  //função que será chamada quando user clicar no botão do card mentor
  function handleClickCardMentor() {
    setIsModalOpen(true);
  }
  //função será chamada quando user clicar para fechar modal
  function handleModalClose() {
    //volta estado de isModalOpen para false, logo como estamos passando isModalOpen como parametros para modal, ela entederá que deve ser fechada
    setIsModalOpen(false);
  }
  return (
    <>
      <ContentContainer>
        <ContentSection>
          <SpanTitle>Expert Team</SpanTitle>
          <Title>Encontre o melhor online mentor para você</Title>
          <TextDescription>Você não precisa lutar sozinho, você conta com nossa assistência e ajuda.</TextDescription>
          <ContainerList className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              {/* oncClick vai disparar função handleClickMentor quando botão for clicado */}
              <CardMentor onClick={handleClickCardMentor} />
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <CardMentor />
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <CardMentor />
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <CardMentor />
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <CardMentor />
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <CardMentor />
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <CardMentor />
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <CardMentor />
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <CardMentor />
            </div>
          </ContainerList>
        </ContentSection>
      </ContentContainer>

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
            <Form.Control type="email" placeholder="name@example.com" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Profissão:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensagem:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </MentorixModal>
    </>
  );
}
