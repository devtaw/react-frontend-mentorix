import { httpClient } from "../../core/httpClient";

export function postAgendamento(agendamento) {
  return httpClient.get("/agendamentos", agendamento).then((response) => response.data);
}
