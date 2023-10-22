import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: ${(props) => props.theme[props.variant || "title-sm"]}
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: ${(props) => props.theme[props.color || "gray-900"]};
`;

export const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "bold" : 400)};
  font-size: ${(props) => props.theme[props.variant || "body-md"]}
  line-height: 1.3;
  color: ${(props) => props.theme[props.color || "base-text"]};
`;
