import { AppProps } from "next/app";

import GlobalStyles from "../styles/global";
import "/public/fonts/my-font.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
