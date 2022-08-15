import { useRouter } from "next/router";
import Head from "next/head";

export type PageHeadProps = {
  pageTitle: string;
  pageDescription?: string;
  ogImageSrc: string;
};

const PageHead = ({
  pageTitle,
  pageDescription,
  ogImageSrc,
}: PageHeadProps) => {
  const router = useRouter();

  const meta = {
    type: "website",
    siteName: "Instill AI",
    pageTitle,
    pageDescription,
  };

  let canonicalURL =
    router.asPath === "/"
      ? `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}` + "/";

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
        <meta property="og:image" content={ogImageSrc} />
        <meta property="twitter:image" content={ogImageSrc} />
      </Head>
    </>
  );
};

export default PageHead;
