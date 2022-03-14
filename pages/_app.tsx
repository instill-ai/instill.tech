import { NextPage } from "next";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactElement, ReactNode, useEffect } from "react";
import { initAmplitude } from "../lib/amplitude";
import "../styles/global.css";
import "intersection-observer";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      initAmplitude();
    }
  }, [router.isReady]);

  const getLayout = Component.getLayout ?? ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default MyApp;
