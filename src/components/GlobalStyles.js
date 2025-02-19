import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    padding-top: 80px; /* Push all content down */
  }

  section {
    padding: 20px 0; /* Ensure spacing in sections */
  }
`;

export default GlobalStyles;
