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

  fragment experience on Portfolio {
    experienceSection {
      title
      description
      experiences {
        id
        title
        description
        company
        skills {
          id
          title
        }
        date
      }
    }
  }

  query GET_PORTFOLIO {
    portfolio {
      ...logo
      ...banner
      ...experience
    }
  }
`;

export default GET_PORTFOLIO;
