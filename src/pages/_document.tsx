import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
          <link
            rel="apple-touch-icon"
            href="./favicon.png"
            type="image/x-icon"
          />

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

          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
            rel="stylesheet"
            crossOrigin="tue"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
