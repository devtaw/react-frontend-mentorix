import styled from "styled-components";
import { ContentContainer } from "../../../common/ContentContainer.styled";
import aboutSectionImage from "../../../assets/img/bg-section-about.png";

export const Container = styled(ContentContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 62px 0 0 0;
`;

export const AboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) => p.theme["background-light"]};
  background-image: url(${aboutSectionImage});
  background-size: cover;
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 20px;

  H2 {
    padding: 5px 10px;
    display: inline-block;
    width: auto;
    font-size: 45px;
    color: ${(p) => p.theme["text-dark"]};
  }

  p {
    color: ${(p) => p.theme["text-dark"]};
    padding: 5px 10px;
    display: inline-block;
    width: auto;
    font-size: 20px;
  }

  span {
    font-family: "Open Sans", sans-serif;
    background-color: ${(p) => p.theme["background-dark"]};
    color: ${(p) => p.theme["secondary-50"]};
    padding: 5px 10px;
    display: inline-block;
    width: auto;
    font-size: 14px;
    font-weight: 700;
    border-radius: 8px;
  }
`;
export const ImageContainer = styled.div`
  img {
    width: 70%;
    max-width: 70%;
  }
`;
