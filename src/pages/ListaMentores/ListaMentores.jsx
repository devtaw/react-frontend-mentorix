import React, { useState } from "react";
import { ContainerList, ContentSection, SpanTitle, TextDescription, Title, Container } from "./ListaMentores.styled";
import { CardMentor } from "./CardMentor/CardMentor";
import { useQuery } from "@tanstack/react-query";
import { getMentores } from "../../common/services/MentorService";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import { TextBody } from "../../common/typography";
import { ModalAgendamento } from "./ModalAgendamento/ModalAgendamento";

export function ListaMentores() {
  //cria estado p/ guardar se modal estar aberta ou fechada
  const [isModalOpen, setIsModalOpen] = useState(false);
  //data é preenchido quando a query retorna um resultado e isLoading será true quando a query estiver sendo executada
  const listaMentoresQuery = useQuery({
    queryKey: ["lista-mentores"],
    //aqui se passa função q busca dados na API p/ propriedade queryFN p/ q react-query possa gerenciar estado dessa requisição
    queryFn: getMentores,
  });

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
      <Header />
      <Container>
        <ContentSection>
          <SpanTitle>Expert Team</SpanTitle>
          <Title>Encontre o melhor mentor online para você</Title>
          <TextDescription>Você não precisa lutar sozinho, você conta com nossa assistência e ajuda.</TextDescription>
          <ContainerList className="row">
            {listaMentoresQuery.isLoading && <TextBody className="mt-5">Carregando...</TextBody>}

            {listaMentoresQuery?.data?.map((mentor) => (
              <div key={mentor.id} className="col-lg-4 col-md-6 col-xs-12">
                {/* oncClick vai disparar função handleClickMentor quando botão for clicado */}
                <CardMentor
                  urlFoto={mentor.fotoPerfil}
                  nome={mentor.nomeCompleto}
                  biografia={mentor.biografia}
                  especialidades={[]}
                  onClick={handleClickCardMentor}
                />
              </div>
            ))}
          </ContainerList>
        </ContentSection>
      </Container>
      <Footer />
      <ModalAgendamento isModalOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
}
