import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
* { padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
  }
  body {
    font-family: 'AxieForma';
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root {
    height: 100%;
  }
  input, button {
    font-family: Roboto, sans-serif;
  }
  button {
    cursor: pointer;
  }
  a{
    text-decoration: none !important;
  }
`;

export { Global };