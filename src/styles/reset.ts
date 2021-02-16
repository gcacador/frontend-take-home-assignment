import { createGlobalStyle } from 'styled-components';

const StyleReset = createGlobalStyle`
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
