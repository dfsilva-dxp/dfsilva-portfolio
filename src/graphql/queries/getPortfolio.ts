const GET_PORTFOLIO = /* GraphQL */ `
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  fragment button on ComponentPageButton {
    label
    url
  }

  fragment logo on Portfolio {
    logo {
      ...imageData
    }
  }

  fragment banner on Portfolio {
    banner {
      title
      description
      short_description
      button {
        ...button
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

  fragment works on Portfolio {
    worksSection {
      works {
        id
        title
        button {
          label
          url
        }
        wide_img {
          ...imageData
        }
        average_img {
          ...imageData
        }
        small_img {
          ...imageData
        }
      }
    }
  }

  fragment contactUs on Portfolio {
    contactUs {
      title
      contact_type {
        id
        title
        data
      }
    }
  }

  query GET_PORTFOLIO {
    portfolio {
      ...logo
      ...banner
      ...experience
      ...education
      ...works
      ...contactUs
    }
  }
`;

export default GET_PORTFOLIO;
