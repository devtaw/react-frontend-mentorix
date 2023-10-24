import styled from "styled-components";

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 62px 20px;
`;

export const SpanTitle = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 19px;
  margin-left: 2px;
  color: ${(props) => props.theme["primary-900"]};
`;

export const Title = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -1px;
  margin-top: 10px;
  z-index: 1;
  margin-bottom: 3px;
  color: ${(props) => props.theme["blue-gray-900"]};
  width: 493px;
  text-align: left;
  text-transform: capitalize;
`;

export const TextDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: ${(props) => props.theme["body-sm"]};
  color: ${(props) => props.theme["blue-gray-800"]};
  font-weight: 400;
  margin-bottom: 15px;
  line-height: 26px;
  margin-top: 0;
  margin-left: 4px;
`;
