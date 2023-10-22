import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Work Sans;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default GlobalStyles;