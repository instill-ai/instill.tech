import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";

interface Props {}

export const Document: FC<Props> = () => {
  return (
    <Html>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          as="font"
          crossOrigin=""
        />
        <link
          rel="prefetch"
          href="/fonts/instillFont-Regular.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="prefetch"
          href="/fonts/instillFont-Regular.woff"
          as="font"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          defer={true}
          data-domain="instill.tech"
          src="https://plausible.io/js/script.outbound-links.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
