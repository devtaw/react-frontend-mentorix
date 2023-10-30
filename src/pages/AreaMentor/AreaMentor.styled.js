import { CardBody } from "react-bootstrap";
import styled from "styled-components";

export const TextH1Mentor = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme[props.color || "primary-900"]};
  margin-top: 10px;
  margin-bottom: 13px;
`;

export const TextH3Mentor = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  text-align: left;
`;

export const TextH5Mentor = styled.h5`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: left;
  color: ${(props) => props.theme[props.color || "primary-900"]};
`;

export const TextH6Mentor = styled.h6`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  color: ${(props) => props.theme[props.color || "primary-900"]};
`;

export const TextBodyMentor = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  text-align: left;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => props.theme[props.variant || "body-md"]};
  line-height: 1.3;
  color: ${(props) => props.theme[props.color || "base-text"]};
`;

export const TextDescriptionMentor = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  color: blue-gray-800;
  font-weight: 400;
  margin-bottom: 15px;
  line-height: 26px;
  margin-top: 10;
  margin-left: 4px;
  text-align: left;
`;

export const Container = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

export const Row2 = styled.div`
  height: 240px;
  top: 0;
  img {
    object-fit: contain;
    width: 100%;
    opacity: 0.5;
    position: relative;
    z-index: 0;
  }
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
  position: relative;
  z-index: 1;
  margin-top: -130px;
`;

export const AgendamentoContainer = styled.div`
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
