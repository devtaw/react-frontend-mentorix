import styled from "styled-components";
import { ContentContainer } from "../../../common/ContentContainer.styled";
import welcomeSectionImage from "../../../assets/img/bg-section-welcome.png";

export const WelcomeContainer = styled.div`
  display: flex;
  background-color: ${(p) => p.theme["background-dark"]};
  color: ${(p) => p.theme["white"]};

  background-image: url(${welcomeSectionImage});
  background-size: cover;
`;

export const Container = styled(ContentContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 62px 0;
`;

export const TextH1 = styled.h1`
  color: ${(p) => p.theme["background-light"]};
  font-size: 24px;
`;

export const TextH2 = styled.h2`
  color: ${(p) => p.theme["background-light"]};
  font-size: 60px;
`;

export const TextContainer = styled.div`
  max-width: 50%;
  h1 {
    font-size: 65px;
    color: ${(p) => p.theme["text-light"]};
  }
  p {
    font-size: 18px;
    color: ${(p) => p.theme["text-light"]};
  }
  span {
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    background-color: ${(p) => p.theme["background-light"]};
    color: ${(p) => p.theme["primary-800"]};
    font-weight: 700;
    padding: 5px 10px;
    display: inline-block;
    width: auto;
    border-radius: 8px;
  }
`;
export const ImageContainer = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`;
