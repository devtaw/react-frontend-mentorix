import styled from "styled-components";

export const ContatoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) => p.theme["background-light"]};
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const TextContainer = styled.div`
  flex: 30;
  padding: 50px;
  h3 {
    font-size: 30px;
    color: ${(p) => p.theme["primary-900"]};
  }
  p {
    font-size: 25px;
    color: ${(p) => p.theme["primary-900"]};
    align-items: center;
  }
`;
