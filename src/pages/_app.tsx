import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../styles/global.css";
import "@code-hike/mdx/dist/index.css";

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

  console.log(Component.getLayout);

  return (
    <AnnouncementBarCtxProvider>
      {getLayout(<Component {...pageProps} />)}
    </AnnouncementBarCtxProvider>
  );
}

export default MyApp;
