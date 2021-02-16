import { createGlobalStyle } from 'styled-components';

const StyleReset = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
  }
`;

export { StyleReset };
