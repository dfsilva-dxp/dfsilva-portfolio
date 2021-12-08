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

  fragment education on Portfolio {
    educationSection {
      title
      description
      schooling {
        id
        type
        course
        school
      }
      courses {
        id
        title
        courses {
          id
          title
          duration_level
        }
      }
      languages {
        id
        title
        language {
          id
          title
          duration_level
        }
      }
    }
  }

  query GET_PORTFOLIO {
    portfolio {
      ...logo
      ...banner
      ...experience
      ...education
    }
  }
`;

export default GET_PORTFOLIO;
