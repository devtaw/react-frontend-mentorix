import React from "react";
import {
  Container,
  Row2,
  Avatar,
  TextH1Mentor,
  TextH5Mentor,
  TextH3Mentor,
  TextDescriptionMentor,
  TextBodyMentor,
  AgendamentoContainer,
} from "./AreaMentor.styled";
import { FormMentor } from "../../common/FormMentor/FormMentor";
import "bootstrap/dist/js/bootstrap.bundle";
import imgCapa from "../../assets/img/div-capa-areaMentor.png";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMentorById } from "../../common/services/MentorService";
import { Agendamento } from "../../common/Agendamento/Agendamento";

export function AreaMentor() {
  const { id } = useParams();
  const [mentorData, setMentorData] = useState(null);
  const [especialidade, setEspecialidadeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMentorData() {
      try {
        const mentor = await getMentorById(id);
        console.log(mentor);
        setMentorData(mentor);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar os dados do mentor:", error);
        setLoading(false);
      }
    }
    fetchMentorData();
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <div className="container mb-5">
          <div className="row">
            <div className="col-12"></div>
          </div>
          <Row2>
            <img src={imgCapa} alt="" />
            <div className="col-12"></div>
          </Row2>
          <Avatar img={mentorData?.fotoPerfil}></Avatar>
          <div>
            <div>
              {loading ? (
                <TextH1Mentor className="mb-5 mt-5">Carregando...</TextH1Mentor>
              ) : (
                <TextH1Mentor className="mb-5 mt-5">
                  Seja bem-vindo (a) {mentorData ? mentorData.nomeCompleto : ""}
                  !
                </TextH1Mentor>
              )}
            </div>
            <div>
              <TextH3Mentor className="mb-3 mt-3">
                Solicitações de agendamento recebidas
              </TextH3Mentor>
              <TextBodyMentor>
                Aceite ou recuse suas solicitações e você e o mentorado vão
                receber um e-mail.
              </TextBodyMentor>
            </div>
            {mentorData?.agendamentos?.map((agendamento) => (
              <div key={agendamento.id}>
                <Agendamento
                  idDoAgendamento={agendamento.id}
                  nomeCompleto={agendamento.nomeCompleto}
                  profissao={agendamento.profissao}
                  email={agendamento.email}
                  mensagem={agendamento.campoMensagem}
                />
              </div>
            ))}
            <hr />
            <TextH5Mentor className="mb-4 mt-5">
              Aqui na Área do Mentor você pode editar seu perfil.
            </TextH5Mentor>
          </div>

          <TextDescriptionMentor>
            {" "}
            <strong>Perfil Mentor (Dados Pessoais): </strong>
          </TextDescriptionMentor>

          <FormMentor
            profissao={mentorData ? mentorData.profissao : ""}
            linkedin={mentorData ? mentorData.linkedin : ""}
            biografia={mentorData ? mentorData.biografia : ""}
            email={mentorData ? mentorData.email : ""}
            nome={mentorData ? mentorData.nomeCompleto : ""}
            foto={mentorData ? mentorData.fotoPerfil : ""}
            especialidade={especialidade ? especialidade : ""}
            id={mentorData ? mentorData.id : ""}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
}
