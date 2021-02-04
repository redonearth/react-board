import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    min-height: 100%;
    padding-top: 50px;
  }

  #root {
    min-height: 100%;
  }

  html {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
   box-sizing: inherit;
  }
`;

export default globalStyles;
