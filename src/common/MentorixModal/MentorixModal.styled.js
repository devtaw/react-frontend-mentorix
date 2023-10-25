import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const ModalContainer = styled(Modal)`
  .modal-content {
    border: 2px solid ${(props) => props.theme["secondary-100"]};
    border-radius: 10px;
  }
`;
