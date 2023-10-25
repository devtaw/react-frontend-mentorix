import { CardBody } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

export const MentorName = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const MentorPosition = styled.p`
  font-size: 18px;
  font-style: italic;
`;

export const MentorDescription = styled.p`
  font-size: 16px;
`;

export const Row2 = styled.div`
  height: 240px;
  background-image: url(${(props) => props.img});
`;

export const Avatar = styled.div`
  border-radius: 50%;
  border: solid 1px #000;
  height: 200px;
  width: 200px;
  background-size: cover;
  margin: 0 auto;
  margin-top: -100px;
  background-image: url(${(props) => props.img});
`;

export const Agendamento = styled.div`
  height: 151px;
  border: 1px solid #700fb080;
  box-shadow: 0px 2px 5px #555;
  border-radius: 10px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
`;

export const CardAvatar = styled.img`
  height: 96px;
  width: 96px;
  margin-left: 30px;
`;

export const CardMensagem = styled.div`
  height: 77px;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
`;

export const CardBotton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardIcone = styled.img`
  height: 96px;
  width: 96px;
  margin-left: 30px;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Fundocomcor = styled.h6`
  background-color: #f4ef8c;
`;
