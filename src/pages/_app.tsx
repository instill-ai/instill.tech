import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../styles/global.css";
import "@/style/codeHike.css";

import "intersection-observer";
import { AnnouncementBarCtxProvider } from "../contexts/AnnouncementBarContext";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <AnnouncementBarCtxProvider>
      {getLayout(<Component {...pageProps} />)}
    </AnnouncementBarCtxProvider>
  );
}

export default MyApp;
