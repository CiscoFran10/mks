import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-800']};
  }

  body {
    background: ${(props) => props.theme['white']};
    color: ${(props) => props.theme['black']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul,li {
    list-style: none;
  }

  button {
    border: 0;
    cursor: pointer;
  }
`;
