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
  color: ${(props) => props.theme["primary-900"]};
`;
