export default {
  border: {
    radius: "0.8rem"
  },
  font: {
    family:
      "Quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      light: 300,
      normal: 400,
      medium: 600,
      bold: 700
    },
    sizes: {
      xxsmall: "1.2rem",
      xsmall: "1.4rem",
      small: "1.6rem",
      medium: "1.8rem",
      large: "3.2rem",
      xlarge: "3.6rem",
      xxlarge: "6.4rem"
    }
  },
  colors: {
    white: "#FFF",
    black: "#08070B",
    primary: "#00FF99",
    secondary: "#7F64EE",
    panel: "#212024",
    gray400: "#808DAD",
    gray700: "#494D4B",
    gray800: "#212226",
    gray900: "#212226",
    gradient: "linear-gradient(to right, #80ffea 0%, #8aff80 100%)"
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.4rem",
    small: "1.6rem",
    medium: "2rem",
    large: "3rem",
    xlarge: "4rem",
    xxlarge: "8rem"
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30
  },
  transition: {
    default: "0.15s ease-in-out",
    fast: "0.1s ease-in-out"
  }
} as const;
