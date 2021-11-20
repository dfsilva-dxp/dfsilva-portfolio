import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <title>Daniel Silva &bull; Front-end Developer</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="shortcut icon"
          href="./img/icon-512.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="./img/icon-512.png"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />

        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700&family=Playfair+Display:wght@400;600;700&family=Poppins:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
