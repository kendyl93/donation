import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  },
  h1,h2,h3,h4,h5,h6,p,body {
    font-family: Work Sans;
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Work Sans', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-style: normal;
    font-weight: 600;
    align-self: stretch;
    line-height: 1.2;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    align-self: stretch;
    line-height: 1.25
  }

  input {
    all: unset;
  }
`;

export default GlobalStyles;
