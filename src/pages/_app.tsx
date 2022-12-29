/* eslint-disable react/no-multi-comp, @typescript-eslint/no-explicit-any */

import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../styles/global.css";
import "@/style/codeHike.css";
import "../styles/docs.css";
import "@docsearch/css";
import "@/components/ui/Footer/AnimateSlogan.css";
import { MDXProvider } from "@mdx-js/react";
import { CH } from "@code-hike/mdx/components";
import "intersection-observer";
import { AnnouncementBarCtxProvider } from "../contexts/AnnouncementBarContext";
import {
  MdxCtaButton,
  MdxGist,
  MdxTwitterCard,
  MdxZoomableImg,
  MdxImageGallery,
  MdxYoutubeEmbed,
} from "@/components/ui";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const components = {
  CH,
  ZoomableImg: (props: any) => (
    <MdxZoomableImg
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      position={props.position}
    />
  ),
  Tweet: (props: any) => (
    <MdxTwitterCard tweetId={props.tweetId} position={props.position} />
  ),
  Gist: (props: any) => <MdxGist id={props.id} position={props.position} />,
  Gallery: (props: any) => (
    <MdxImageGallery
      images={props.images}
      position={props.position}
      caption={props.caption}
    />
  ),
  CtaButton: (props: any) => (
    <MdxCtaButton
      text={props.text}
      link={props.link}
      position={props.position}
    />
  ),
  Youtube: (props: any) => (
    <MdxYoutubeEmbed
      id={props.id}
      width={props.width}
      height={props.height}
      position={props.position}
    />
  ),
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <MDXProvider components={components}>
      <AnnouncementBarCtxProvider>
        {getLayout(<Component {...pageProps} />)}
        <div id="zoomable-image" />
      </AnnouncementBarCtxProvider>
    </MDXProvider>
  );
}

export default MyApp;
