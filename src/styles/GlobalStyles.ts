// src/styles/GlobalStyles.ts

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #ff9900;
    --secondary-color: #232f3e;
    --background-color: #f0f2f5;
    --text-color: #111;
    --link-color: #007185;
    --grid-gap: 2rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: var(--background-color);
    color: var(--text-color);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--secondary-color);
  }

  a {
    color: var(--link-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  .slick-list, .slick-track {
    display: flex;
  }
`;

export default GlobalStyles;
