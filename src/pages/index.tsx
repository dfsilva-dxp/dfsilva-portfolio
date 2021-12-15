import Head from "next/head";
import Banner from "../components/Banner";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="./favicon.png" type="image/x-icon" />

        <meta
          name="title"
          content="Daniel Silva - Front-End Developer & UI Design"
        />
        <meta
          name="description"
          content="Especialista em desenvolvimento Front-End e UI Design"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dfsilva.dev/" />
        <meta
          property="og:title"
          content="Daniel Silva - Front-End Developer & UI Design"
        />
        <meta
          property="og:description"
          content="Especialista em desenvolvimento Front-End e UI Design"
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
          content="Especialista em desenvolvimento Front-End e UI Design"
        />
        <meta
          property="twitter:image"
          content="https://dfsilva.dev/danielsilva-facebook.jpg"
        />

        <meta
          name="keywords"
          content="front-end, desenvolvedor front-end, front end, daniel front end, daniel silva, daniel, dev, dev front-end, desenvolver sites, programação de sites, portfolio"
        />
        <title>Daniel Silva &bull; Front-end Developer</title>
      </Head>
      <Layout>
        <Banner />
      </Layout>
    </>
  );
}
