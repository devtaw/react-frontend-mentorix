import { putAgendamento } from "../../common/services/AgendamentoService";

const idDoAgendamento = 123;

export async function atualizarAceite(idDoAgendamento, aceite) {
  const agendamento = {
    aceite: aceite,
  };

  try {
    const resposta = await putAgendamento(idDoAgendamento, agendamento);
    console.log("Aceite atualizado com sucesso:", resposta);
  } catch (error) {
    console.error("Erro ao atualizar o aceite:", error);
  }
}

atualizarAceite(idDoAgendamento);
