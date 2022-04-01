import { useEffect } from "react";
import { useRouter } from "next/router";

import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import * as gtag from "lib/gtag";

import { GlobalStyles, theme } from "styles";
import { Analytics } from "components";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: unknown) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
