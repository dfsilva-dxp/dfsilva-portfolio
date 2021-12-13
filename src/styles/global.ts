import { createGlobalStyle } from "styled-components";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');

:root {
    /* COLORS */
    --white: #fff;
    --gray-50: #F2F3F5;
    --gray-400: #808DAD;
    --gray-800: #494D4B;

    --blue-800: #0E1630;

    --green-500: #00FF99;

    --purple-500: #7F64EE;

    /* FONTS */
    --ft-8: 0.5rem;
    --ft-10: 0.625rem;
    --ft-12: 0.75rem;
    --ft-14: 0.875rem;
    --ft-15: 0.9375rem;
    --ft-16: 1rem;
    --ft-18: 1.125rem;
    --ft-20: 1.25rem;
    --ft-22: 1.375rem;
    --ft-24: 1.5rem;
    --ft-36: 2.25rem;
    --ft-48: 3rem;
    --ft-54: 3.375rem;
    --ft-72: 4.5rem;
    /* BOX-SIZE */
    --px-4: 0.25rem;
    --px-8: 0.5rem;
    --px-10: 0.625rem;
    --px-14: 0.875rem;
    --px-16: 1rem;
    --px-20: 1.25rem;
    --px-24: 1.5rem;
    --px-32: 2rem;
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
    background: var(--white);
    font-family: -apple-system, BlinkMacSystemFont, 'Quicksand', 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--gray-800);
    font-size: var(--ft-15);
    line-height: 1.5;
    font-weight: 500;
    overflow-x: hidden;
  }
  input,
  textarea,
  button,
  label {
    font: 400 var(--ft-15)/var(--ft-15) "Quicksand", sans-serif;
    outline: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
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
    color: var(--purple-500)
  }
  p, a {
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
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 0 var(--px-16);
    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 750px;
    }
    @media (min-width: 992px) {
      max-width: 970px;
    }
    @media (min-width: 1200px) {
      max-width: 1170px;
    }
    @media (min-width: 1920px) {
      max-width: 1640px;
    }

    &  > .grid {
      position: absolute;
      border-left: 1px solid var(--gray-50);
      border-right: 1px solid var(--gray-50);
      left: var(--px-16);
      right: var(--px-16);
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      z-index: -1;

      &::before {
        content: "";
        border-right: 1px solid var(--gray-50);
      }
    }
  }
  .cursor-pointer {
    cursor: pointer
  }
  ::-webkit-scrollbar {
    width: 7px !important;
  }
  ::-webkit-scrollbar-track {
    background: var(--gray-50) !important;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--gray-900) !important;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--gray-800) !important;
  }
`;

export default GlobalStyles;
