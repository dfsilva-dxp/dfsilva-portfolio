const GET_PORTFOLIO = /* GraphQL */ `
  query GET_PORTFOLIO {
    portfolio {
      logo {
        alternativeText
        url
      }
    }
  }
`;

export default GET_PORTFOLIO;
