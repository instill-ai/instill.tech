import { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

interface Props {
  pageTitle: string;
  pageDescription?: string;
  children: ReactNode;
}

export const PageHead: FC<Props> = ({
  pageTitle,
  pageDescription,
  children,
}) => {
  const router = useRouter();
  const meta = {
    type: "website",
    siteName: "Instill AI",
    pageTitle,
    pageDescription,
  };
  return (
    <>
      <Head>
        <title>{meta.pageTitle}</title>
        {meta.pageDescription && (
          <meta content={meta.pageDescription} name="description" />
        )}
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:description" content={meta.pageDescription} />
        <meta property="og:title" content={meta.pageTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.siteName} />
        <meta name="twitter:title" content={meta.pageTitle} />
        <meta name="twitter:description" content={meta.pageDescription} />
      </Head>
      {children}
    </>
  );
};
