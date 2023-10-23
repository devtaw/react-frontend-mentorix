import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --header-hight: 6.75rem;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    background: ${(props) => props.theme.background};
  }

  button {
    line-height: 0;
  }

  // titles
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    line-height: 130%;
    font-weight: 700;
  }
`;
