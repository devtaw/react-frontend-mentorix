import React, { useState } from "react";
import {
  ContainerList,
  ContentSection,
  SpanTitle,
  TextDescription,
  Title,
  Container,
  ListaEspecialidades,
} from "./ListaMentores.styled";
import { CardMentor } from "./CardMentor/CardMentor";
import { useQuery } from "@tanstack/react-query";
import { getMentores, getMentoresEspecialidades } from "../../common/services/MentorService";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import { TextBody } from "../../common/typography";
import { ModalAgendamento } from "./ModalAgendamento/ModalAgendamento";

export function ListaMentores() {
  //cria estado p/ guardar se modal estar aberta ou fechada
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idMentor, setIdMentor] = useState(null);
  //data é preenchido quando a query retorna um resultado e isLoading será true quando a query estiver sendo executada
  const listaMentoresQuery = useQuery({
    queryKey: ["lista-mentores"],
    //aqui se passa função q busca dados na API p/ propriedade queryFN p/ q react-query possa gerenciar estado dessa requisição
    queryFn: getMentores,
  });

  const mentoresEspecialidadesQuery = useQuery({
    queryKey: ["lista-mentores-especialidades"],
    //aqui se passa função q busca dados na API p/ propriedade queryFN p/ q react-query possa gerenciar estado dessa requisição
    queryFn: getMentoresEspecialidades,
  });

  // cria mapa de mentor_id para especialidades
  const mentorEspecialidadesMap = new Map(
    mentoresEspecialidadesQuery.data?.map((mentorEspecialidade) => [
      mentorEspecialidade.mentor_id,
      mentorEspecialidade.especialidades,
    ])
  );

  //função que será chamada quando user clicar no botão do card mentor
  function handleClickCardMentor(idMentor) {
    setIdMentor(idMentor);
    setIsModalOpen(true);
  }
  //função será chamada quando user clicar para fechar modal
  function handleModalClose() {
    setIdMentor(null);

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
          <TextDescription>
            Aqui você conta com nossa assistência e ajuda. Mentorix facilitando conexões!
          </TextDescription>
          <ContainerList className="row">
            {listaMentoresQuery.isLoading && <TextBody className="mt-5">Carregando...</TextBody>}
            {/* <ListaEspecialidades>
              <li>Desenvolvimento</li>
              <li>Finanças</li>
              <li>Criatividade</li>
              <li>Criptomoedas</li>
            </ListaEspecialidades> */}
            {listaMentoresQuery?.data?.map((mentor) => (
              <div key={mentor.id} className="col-lg-4 col-md-6 col-xs-12">
                {/* oncClick vai disparar função handleClickMentor quando botão for clicado */}
                <CardMentor
                  urlFoto={mentor.fotoPerfil}
                  profissao={mentor.profissao}
                  nome={mentor.nomeCompleto}
                  biografia={mentor.biografia}
                  especialidades={mentorEspecialidadesMap.get(mentor.id) || []}
                  linkedin={mentor.linkedin}
                  onClick={() => handleClickCardMentor(mentor.id)}
                />
              </div>
            ))}
          </ContainerList>
        </ContentSection>
      </Container>
      <Footer />
      <ModalAgendamento idMentor={idMentor} isModalOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
}
