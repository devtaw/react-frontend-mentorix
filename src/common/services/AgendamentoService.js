import { httpClient } from "../../core/httpClient";

export function postAgendamento(agendamento) {
  return httpClient.post("/agendamentos", agendamento).then((response) => response.data);
}

export function putAgendamento(idDoAgendamento, agendamento) {
  return httpClient.put("/agendamentos/"+idDoAgendamento, agendamento).then((response) => response.data);
}