import { httpClient } from "../../core/httpClient";

export function postAgendamento(agendamento) {
  return httpClient.post("/agendamentos", agendamento).then((response) => response.data);
}
