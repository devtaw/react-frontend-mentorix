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
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
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

export const SigaIcon = styled.img`
  display: flex;
  height: 26px;
  flex-direction: column;
  justify-content: flex-end;
  color: #d698ff;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding-top: 10px;

  a {
    /* Ajuste a margem direita conforme necessário para reduzir o espaçamento horizontal */
    color: #818181;
    font-family: Open Sans;
    text-decoration: none;
    align-items: center;
  }
`;

export const AddressIcon = styled.img`
  display: flex;
  height: 26px;
  flex-direction: column;
  justify-content: flex-end;
  color: #d698ff;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
`;

export const TimeIcon = styled.img`
  width: 278px;
  flex-shrink: 0;
  color: #d698ff;
  font-family: Open Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
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
export const IconLink = styled.div`
  display: flex;
  flex-direction: row; // Para alinhar o ícone e o texto horizontalmente
  align-items: center; // Para centralizar verticalmente
  margin: 20px; /* Espaço entre os elementos .icon-link */
`;

export const IconImage = styled.img`
  width: 32px; /* Ajuste o tamanho do ícone conforme necessário */
  height: auto;
  margin-right: 10px; /* Espaço entre o ícone e o texto */
`;

export const IconText = styled.p`
  color: #818181;
  font-family: Open Sans;
  margin: 0; /* Remover a margem padrão do parágrafo */
  font-size: 14px; /* Ajuste o tamanho da fonte conforme necessário */
`;

export const CopyrightInfo = styled.div`
  bottom: 0;
  width: 100%;
  color: #f4ef8c;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  border: 0px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
`;

export const CopyrightText = styled.p`
  font-size: 14px;
  opacity: 0.7;
  flex-wrap: wrap;
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
`;
