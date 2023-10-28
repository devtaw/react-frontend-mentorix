import styled from "styled-components";
import { ContentContainer } from "../../../common/ContentContainer.styled";

export const WelcomeContainer = styled.div`
  display: flex;
  background-color: ${(p) => p.theme["primary-900"]};
  color: ${(p) => p.theme["white"]};
`;

export const Container = styled(ContentContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 62px 0;
`;

export const TextH1 = styled.h1`
  color: ${(p) => p.theme["white"]};
  font-size: 24px;
`;

export const TextH2 = styled.h2`
  color: ${(p) => p.theme["white"]};
  font-size: 60px;
`;

export const TextContainer = styled.div`
  max-width: 50%;
  h1 {
    font-size: 65px;
    color: ${(p) => p.theme["terciary-300"]};
  }
  h2 {
    font-size: 18px;
    color: ${(p) => p.theme["terciary-100"]};
  }
  h6 {
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
    background-color: ${(p) => p.theme["blue-a400"]};
    color: ${(p) => p.theme["white"]};
    padding: 5px 10px;
    display: inline-block;
    width: auto;
  }
`;
export const ImageContainer = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`;
