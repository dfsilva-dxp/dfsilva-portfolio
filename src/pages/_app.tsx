import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="./favicon.png" type="image/x-icon" />

        <title>Daniel Silva &bull; Front-end Developer</title>
        <meta
          name="title"
          content="Daniel Silva - Front-End Developer & UI Design"
        />
        <meta
          name="description"
          content="Desenvolvedor Front-End e UI Design"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dfsilva.dev/" />
        <meta
          property="og:title"
          content="Daniel Silva - Front-End Developer & UI Design"
        />
        <meta
          property="og:description"
          content="Desenvolvedor Front-End e UI Design"
        />
        <meta
          property="og:image"
          content="https://dfsilva.dev/danielsilva-facebook.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dfsilva.dev/" />
        <meta
          property="twitter:title"
          content="Daniel Silva - Front-End Developer & UI Design"
        />
        <meta
          property="twitter:description"
          content="Desenvolvedor Front-End e UI Design"
        />
        <meta
          property="twitter:image"
          content="https://dfsilva.dev/danielsilva-facebook.jpg"
        />

        <meta
          name="keywords"
          content="front-end, desenvolvedor front-end, front end, daniel front end, daniel silva, daniel, dev, dev front-end, desenvolver sites, programação de sites, portfolio"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
