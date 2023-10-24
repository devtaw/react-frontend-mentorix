import styled from "styled-components";

const AboutSection = styled.section`
  /* background-color: #f7f7f7; */
  padding: 40px;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${(p) => p.theme["primary"]};
  margin-bottom: 20px;
`;

const AboutDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  /* color: #333; */
`;
