import { NextPage } from "next";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { initAmplitude } from "../lib/amplitude";
import "../styles/global.css";
import "intersection-observer";
import { amplitudeCtx } from "../context/AmplitudeContext";
import { AnnouncementBarCtxProvider } from "../context/AnnouncementBarContext";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [amplitudeIsInit, setAmplitudeIsInit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      initAmplitude();
      setAmplitudeIsInit(true);
    }
  }, [router.isReady]);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <amplitudeCtx.Provider value={{ amplitudeIsInit, setAmplitudeIsInit }}>
      <AnnouncementBarCtxProvider>
        {getLayout(<Component {...pageProps} />)}
      </AnnouncementBarCtxProvider>
    </amplitudeCtx.Provider>
  );
}

export default MyApp;
