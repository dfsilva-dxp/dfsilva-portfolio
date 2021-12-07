const GET_PORTFOLIO = /* GraphQL */ `
  fragment logo on Portfolio {
    logo {
      alternativeText
      url
    }
  }

  fragment banner on Portfolio {
    banner {
      title
      description
      short_description
      button {
        label
        url
      }
    }
  }

  query GET_PORTFOLIO {
    portfolio {
      ...logo
      ...banner
    }
  }
`;

export default GET_PORTFOLIO;
