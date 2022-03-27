import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('../fonts/quicksand-v28-latin-300.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('../fonts/quicksand-v28-latin-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('../fonts/quicksand-v28-latin-600.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('../fonts/quicksand-v28-latin-700.woff2') format('woff2')
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      background: ${theme.colors.black};
      font: ${theme.font.weight.normal} ${theme.font.sizes.small}
          ${theme.font.family},
        sans-serif;
      color: ${theme.colors.white};
      line-height: 1.5;
      overflow-x: hidden;
    }
    input,
    textarea,
    button {
      color: ${theme.colors.gray400};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${theme.font.weight.bold};
    }
    button {
      cursor: pointer;
    }
    ul,
    ol {
      list-style: none;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    [disabled],
    [readonly] {
      cursor: not-allowed;
    }

    ::-webkit-scrollbar {
      width: 7px !important;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.colors.panel} !important;
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.gradient} !important;
      border-radius: 50px !important;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.gradient} !important;
    }
  `}
`;

export default GlobalStyles;
