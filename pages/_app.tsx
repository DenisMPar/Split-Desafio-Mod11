import Head from "next/head";
import type { AppProps } from "next/app";

import "public/base.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Split</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
