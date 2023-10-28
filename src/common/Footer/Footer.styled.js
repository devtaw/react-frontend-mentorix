import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1b2336;
  color: ${(p) => p.theme["blue-gray-100"]};
  padding: 50px;

  h2 {
    color: ${(p) => p.theme["secondary-600"]};
    line-height: normal;
    letter-spacing: -0.48px;
  }

  h4 {
    color: ${(p) => p.theme["terciary-200"]};
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
    gap: 10px;
  }
`;

export const IconLink = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    display: flex;
    align-items: center;
    color: ${(p) => p.theme["blue-gray-100"]} !important;
    font-family: Open Sans;
    text-decoration: none;
  }
`;

export const Logo = styled.img`
  width: 141px;
  height: 50px;
  flex-shrink: 0;
`;

export const Description = styled.p`
  display: flex;
  width: 350px;
  height: 90px;
  flex-direction: column;
  justify-content: flex-end;
  color: ${(p) => p.theme["blue-gray-100"]};
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding-top: 10px;

  a {
    color: ${(props) => props.theme["blue-gray-100"]};
    font-family: Open Sans;
    text-decoration: none;
    align-items: center;
  }
`;
export const OpeningHours = styled.div`
  p {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: ${(p) => p.theme["blue-gray-100"]};
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-family: Open Sans;
  text-decoration: none;
`;

export const CopyrightInfo = styled.div`
  bottom: 0;
  width: 100%;
  color: ${(p) => p.theme["terciary-200"]};
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
