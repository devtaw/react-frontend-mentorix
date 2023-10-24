import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  color: ${(p) => p.theme["blue-gray-500"]};
  padding: 50px;

  h2 {
    color: ${(p) => p.theme["secondary-400"]};
    line-height: normal;
    letter-spacing: -0.48px;
  }

  h1 {
    color: ${(p) => p.theme["secondary-400"]};
    line-height: normal;
    letter-spacing: -0.48px;
  }
`;
