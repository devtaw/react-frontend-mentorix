import styled from "styled-components";

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) => p.theme["primary-900"]};
  padding: 20px;
  color: ${(p) => p.theme["white"]};
  display: flex;
  justify-content: flex-end;
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
  flex: 1;
  padding: 50px;
  h1 {
    font-size: 50px;
    color: ${(p) => p.theme["terciary-300"]};
  }
  h2 {
    font-size: 15px;
    color: ${(p) => p.theme["terciary-100"]};
  }
  h6 {
    font-family: "Open Sans", sans-serif;
    background-color: #2467ec;
    color: #fff;
    padding: 5px 10px;
    display: inline-block;
    width: auto;
  }
`;
export const ImageContainer = styled.div`
  justify-content: flex-end;
  flex: 1;

  img {
    max-width: 100%;
    height: auto;
  }
`;
