import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
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
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="shortcut icon"
            href="/img/icon-512.png"
            type="image/x-icon"
          />
          <link
            rel="apple-touch-icon"
            href="/img/icon-512.png"
            type="image/x-icon"
          />
          <link rel="manifest" href="/manifest.json" />

          <title>Daniel Silva &bull; Front-End Developer</title>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dfsilva.dev/" />
          <meta
            property="og:title"
            content="Daniel Silva - Desenvolvedor Front-End"
          />
          <meta
            property="og:description"
            content="Especialista em desenvolvimento Front-End"
          />
          <meta property="og:image" content="https://dfsilva.dev/" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://dfsilva.dev/" />
          <meta
            property="twitter:title"
            content="Daniel Silva - Desenvolvedor Front-End"
          />
          <meta
            property="twitter:description"
            content="Especialista em desenvolvimento Front-End"
          />
          <meta property="twitter:image" content="https://dfsilva.dev/" />

          <meta
            name="keywords"
            content="front-end, desenvolvedor front-end, front end, daniel silva front end, dfsilva front end, daniel silva, dfsilva, dev, dev front-end, desenvolver sites, programação de sites, portfolio"
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
