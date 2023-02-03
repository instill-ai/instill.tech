import { useRouter } from "next/router";
import Head from "next/head";
import { ReactElement } from "react";
import { BlogArticleMeta, Nullable, TutorialMeta } from "@/types/instill";
import { CommitMeta } from "@/lib/github/type";

export type PageHeadProps = {
  pageTitle: string;
  pageDescription: Nullable<string>;
  pageType: "main" | "docs" | "tutorial" | "blog";
  additionMeta: Nullable<ReactElement>;
  currentArticleMeta: Nullable<TutorialMeta | BlogArticleMeta>;
  commitMeta: Nullable<CommitMeta>;
};

export const PageHead = ({
  pageTitle,
  pageDescription,
  pageType,
  additionMeta,
  currentArticleMeta,
  commitMeta,
}: PageHeadProps) => {
  const router = useRouter();

  const canonicalURL =
    router.asPath === "/"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`;

  // title, meta or any other elements (e.g. script) need to be contained
  // as direct children of the Head element, or wrapped into maximum one
  // level of <React.Fragment> or arrays—otherwise the tags won't be correctly
  // picked up on client-side navigations.

  // So we can't store openGraph in another OpenGraph component

  const pageMeta = {
    siteName: "Instill AI",
    defaultDescription:
      "Empower modern data stack, tapping the value of unstructured data with our open source community.",
  };

  const baseOpenGraph = (
    <>
      <meta property="og:site_name" content={pageMeta.siteName} />
      <meta
        property="og:description"
        content={pageDescription || pageMeta.defaultDescription}
      />
      <meta property="og:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={pageMeta.siteName} />
      <meta name="twitter:title" content={pageTitle} />
      <meta
        name="twitter:description"
        content={pageDescription || pageMeta.defaultDescription}
      />
    </>
  );

  let openGraph: Nullable<ReactElement> = null;

  switch (pageType) {
    case "main": {
      openGraph = (
        <>
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}/instill-ai-open-graph.png`}
          />
          <meta
            property="twitter:image"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}/instill-ai-open-graph.png`}
          />
        </>
      );
      break;
    }
    case "docs": {
      openGraph = (
        <>
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}/instill-ai-open-graph.png`}
          />
          <meta
            property="twitter:image"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}/instill-ai-open-graph.png`}
          />
        </>
      );
      break;
    }
    case "tutorial": {
      const meta = currentArticleMeta as TutorialMeta;
      openGraph = (
        <>
          <meta property="og:type" content="article" />
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}/${meta.themeImgThumbnailSrc}`}
          />
          <meta
            property="twitter:image"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}/${meta.themeImgThumbnailSrc}`}
          />
          <meta name="twitter:label1" content="Written by" />
          <meta name="twitter:data1" content={meta.author} />
          <meta name="twitter:label2" content="Use Case" />
          <meta name="twitter:data2" content={meta.useCase} />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/instilltech"
          />
          <meta property="article:published_time" content={meta.publishedOn} />
          <meta property="article:tag" content={meta.useCase} />
          {commitMeta && commitMeta.lastEditedTime ? (
            <meta
              property="article:modified_time"
              content={commitMeta.lastEditedTime}
            />
          ) : null}
        </>
      );
      break;
    }
    case "blog": {
      const meta = currentArticleMeta as BlogArticleMeta;
      openGraph = (
        <>
          {baseOpenGraph}
          <meta property="og:type" content="article" />
          <meta
            property="og:image"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}/${meta.themeImgThumbnailSrc}`}
          />
          <meta
            property="twitter:image"
            content={`${process.env.NEXT_PUBLIC_BASE_URL}/${meta.themeImgThumbnailSrc}`}
          />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/instilltech"
          />
          <meta name="twitter:label1" content="Written by" />
          <meta name="twitter:data1" content={meta.author} />
          <meta name="twitter:label2" content="Category" />
          <meta name="twitter:data2" content={meta.category} />
          <meta property="article:published_time" content={meta.publishedOn} />
          <meta property="article:tag" content={meta.category} />
          {commitMeta && commitMeta.lastEditedTime ? (
            <meta
              property="article:modified_time"
              content={commitMeta.lastEditedTime}
            />
          ) : null}
        </>
      );
      break;
    }
    default:
      throw new Error(`Page type not exist: ${pageType}`);
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {pageDescription && (
          <meta content={pageDescription} name="description" />
        )}
        <meta property="og:url" content={canonicalURL} />
        <link rel="canonical" href={canonicalURL} />
        {baseOpenGraph}
        {openGraph}
        {additionMeta}
        {pageType === "main" ? (
          <>
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/instill-ai-favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/instill-ai-favicon-16x16.png"
            />
            <link rel="shortcut icon" href="/instill-ai-favicon.ico" />
          </>
        ) : (
          <>
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/vdp-favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/vdp-favicon-16x16.png"
            />
            <link rel="shortcut icon" href="/vdp-favicon.ico" />
          </>
        )}
      </Head>
    </>
  );
};
