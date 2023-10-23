import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1b2336;
  color: #818181;
  padding: 50px;

  .content {
    display: flex;
  }
  .imagens {
    display: flex;
  }
  h2 {
    color: #d698ff;
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.48px;
  }
`;

export const Column = styled.div`
  flex: 1;
  padding: 20px;

  &:last-child {
    display: flex;
    flex-direction: column;
  }
  .icon-link {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const Logo = styled.img`
  width: 141px;
  height: 50px;
  flex-shrink: 0;
`;

export const Description = styled.p`
  display: flex;
  width: 312px;
  height: 63px;
  flex-direction: column;
  justify-content: flex-end;
  color: #818181;
  font-family: Montserrat;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.34px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding-top: 10px;

  a {
    color: #818181;
    font-family: Open Sans;
    text-decoration: none;
    align-items: center;
  }
`;

export const OpeningHours = styled.div`
  p {
    display: flex;
    padding-top: 5px;
    flex-direction: column;
    color: #818181;
    font-family: Montserrat;
    font-size: 17px;
    margin: 0px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  margin: 10px 0; /* Adicione espaço acima e abaixo do elemento Link */
  color: #818181;
  font-family: Open Sans;
  text-decoration: none;
`;
