import { GetStaticPaths, GetStaticProps } from "next";
import { getMarkdownVideoMeta } from "get-markdown-video-meta";
import Head from "next/head";
import React from "react";

export type VideoPageProps = {
  title: string;
  description?: string;
  html: string;
  id: string | null;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const metas = await getMarkdownVideoMeta({
    provider: "youtube",
    targets: ["blog", "tutorials"],
    mdxComponents: [{ componentName: "Youtube", propName: "id" }],
    verbose: true,
  });

  const paths: string[] = [];
  for (const meta of metas) {
    if (meta.id) {
      paths.push(meta.id);
    }
  }

  return {
    paths: paths.map((path) => {
      return {
        params: {
          path: [path],
        },
      };
    }),

    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<VideoPageProps> = async ({
  params,
}) => {
  if (!params || !params.path) {
    return {
      notFound: true,
    };
  }

  const path = params.path.toString();

  const metas = await getMarkdownVideoMeta({
    provider: "youtube",
    targets: ["blog", "tutorials"],
    mdxComponents: [{ componentName: "Youtube", propName: "id" }],
    verbose: true,
  });

  const targetVideoMeta = metas.find((meta) => meta.id === path);

  if (!targetVideoMeta) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: targetVideoMeta.title,
      html: targetVideoMeta.html,
      id: targetVideoMeta.id,
    },
  };
};

const VideoPage = ({ title, html, id }: VideoPageProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>Video Page</title>
        <meta name="description" content="Blog Video Example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <h1>{title}</h1>
          {id ? (
            <iframe
              id="ytplayer"
              width="800"
              height="500"
              src={`https://www.youtube.com/embed/${id}`}
              style={{ border: "none" }}
            />
          ) : (
            <div
              className="video-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

export default VideoPage;
