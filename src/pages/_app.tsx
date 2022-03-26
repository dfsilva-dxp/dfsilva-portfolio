import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from "styles";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
