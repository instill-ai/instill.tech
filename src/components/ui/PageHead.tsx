import { useRouter } from "next/router";
import Head from "next/head";
import { ReactElement } from "react";

export type PageHeadProps = {
  pageTitle: string;
  pageDescription?: string;
  pageType: "main" | "docs";
  additionMeta?: ReactElement;
  ogImage?: string;
};

export const PageHead = ({
  pageTitle,
  pageDescription,
  pageType,
  additionMeta,
  ogImage,
}: PageHeadProps) => {
  const router = useRouter();

  const meta = {
    type: "website",
    siteName: "Instill AI",
    pageTitle,
    pageDescription,
  };

  const canonicalURL =
    router.asPath === "/"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`;

  return (
    <>
      <Head>
        <title>{meta.pageTitle}</title>
        {meta.pageDescription && (
          <meta content={meta.pageDescription} name="description" />
        )}
        <meta property="og:url" content={canonicalURL} />
        <link rel="canonical" href={canonicalURL} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:description" content={meta.pageDescription} />
        <meta property="og:title" content={meta.pageTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.siteName} />
        <meta name="twitter:title" content={meta.pageTitle} />
        <meta name="twitter:description" content={meta.pageDescription} />
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
            <meta
              property="og:image"
              content={
                ogImage
                  ? ogImage
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/instill-ai-open-graph.png`
              }
            />
            <meta
              property="twitter:image"
              content={
                ogImage
                  ? ogImage
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/instill-ai-open-graph.png`
              }
            />
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
            <meta
              property="og:image"
              content={
                ogImage
                  ? ogImage
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/instill-ai-open-graph.png`
              }
            />
            <meta
              property="twitter:image"
              content={
                ogImage
                  ? ogImage
                  : `${process.env.NEXT_PUBLIC_BASE_URL}/instill-ai-open-graph.png`
              }
            />
          </>
        )}
      </Head>
    </>
  );
};
