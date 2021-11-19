import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    /* COLORS */
    --white: #fff;
    --gray-50: #f7f8fa;
    --gray-100: #e6e8eb;
    --gray-200: #afb2b1;
    --gray-500: #808080;
    --gray-800: #494d4b;

    --green-500: #04d361;

    --red-400: #E83F5B;

    --yellow-500: #FFC727;

    --purple-500: #8257e5;

    /* FONTS */
    --ft-8: 0.5rem;
    --ft-10: 0.625rem;
    --ft-12: 0.75rem;
    --ft-14: 0.875rem;
    --ft-15: 0.9375rem;
    --ft-16: 1rem;
    --ft-20: 1.25rem;
    --ft-24: 1.5rem;
    --ft-36: 2.25rem;
    --ft-48: 3rem;
    --ft-54: 3.375rem;

    /* BOX-SIZE */
    --px-4: 0.25rem;
    --px-8: 0.5rem;
    --px-10: 0.625rem;
    --px-16: 1rem;
    --px-20: 1.25rem;
    --px-40: 2.5rem;
    --px-48: 3rem;
    --px-64: 4rem;
    --px-80: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-50);
    font-family: -apple-system, BlinkMacSystemFont, 'Fira Sans', 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--gray-500);
    line-height: 1.5;
    font-weight: 400;
    overflow: hidden;
  }

  input,
  textarea,
  button,
  label {
    font: 400 var(--ft-15)/var(--ft-15) "Fira Sans", sans-serif;
    outline: 0;
    color: var(--gray-800);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: var(--gray-800);
  }

  ol,
  ul {
    list-style: none;
  }

  span {
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  strong {
    font-weight: 700;
  }

  p, a {
    font-size: var(--ft-15);
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* CLASSES GERAIS */
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1480px;
    }
    @media (min-width: 1920px) {
      max-width: 1640px;
    }
  }

  /*
  ::-webkit-scrollbar {
    width: 7px !important;
  }
  ::-webkit-scrollbar-track {
    background: var(--gray-100) !important;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--purple-400) !important;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--purple-500) !important;
  } */
`;

export default GlobalStyles;
