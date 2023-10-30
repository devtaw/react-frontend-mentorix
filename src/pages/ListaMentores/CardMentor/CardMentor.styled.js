import { Button, Card } from "react-bootstrap";
import styled from "styled-components";
import { TextBody } from "../../../common/typography";

export const CardContainer = styled(Card)`
  border-radius: 5px;
  border: none;
  margin-bottom: calc(var(--bs-gutter-x));
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const TextBio = styled(TextBody)`
  line-height: 25px;
  /* border-bottom: 1px solid ${(props) => props.theme["blue-gray-50"]}; */
  padding-bottom: 10px;
  margin: 0px;
  letter-spacing: 0.3px;
`;

export const TagList = styled.div`
  margin-top: 0.74rem;
  display: flex;
  gap: 0.5rem;

  h5 {
    padding: 0.15rem 0.5rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme["terciary-50"]}; //#F1E9C9
    color: ${(props) => props.theme["terciary-800"]}; //#C47F17
  }

  h5.tecnologia {
    background-color: ${(props) => props.theme["primary-200"]};
    color: ${(props) => props.theme["primary-900"]};
  }

  h5.negocios {
    background-color: ${(props) => props.theme["terciary-200"]};
    color: ${(props) => props.theme["terciary-800"]};
  }

  h5.comportamento {
    background-color: ${(props) => props.theme["secondary-100"]};
    color: ${(props) => props.theme["secondary-800"]};
  }
`;

export const ButtonCTA = styled(Button)`
  height: 45px;
  padding: 0 45px;
  display: inline-block;
  background-color: #2467ec;
  line-height: 45px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s ease-out 0s;
`;

export const ContainerAvatar = styled.div`
  height: 212px;
  overflow: hidden;

  img {
    object-fit: contain;
  }
`;

export const LinkedinArea = styled.div`
  background-color: ${(props) => props.theme["primary-900"]};

  border-radius: 10px;
  transition: all 0.3s ease-out 0s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme["blue-gray-600"]};
  }
`;
