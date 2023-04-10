import { getServerSideSitemapLegacy } from "next-sitemap";
import { GetServerSideProps } from "next";
import { getMarkdownVideoMeta } from "get-markdown-video-meta";

export type VideoSiteMapProps = {
  link: string;
  videos: {
    title: string;
    description: string;
    thumbnailLoc: URL;
  }[];
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const videosMeta = await getMarkdownVideoMeta({
    provider: "youtube",
    targets: ["blog", "tutorials"],
    mdxComponents: [{ componentName: "Youtube", propName: "id" }],
    verbose: true,
  });

  const uniqueIds: string[] = [];
  // remove duplicate object
  const metas = videosMeta.filter((meta) => {
    if (meta.id) {
      const isDuplicate = uniqueIds.includes(meta.id);
      if (!isDuplicate) {
        uniqueIds.push(meta.id);
        return true;
      }
      return false;
    }
  });

  const videos: VideoSiteMapProps[] = metas.map((meta) => {
    return {
      link: `${process.env.NEXT_PUBLIC_BASE_URL}/videos/${meta?.id}`,
      videos: [
        {
          title: meta?.title,
          description: "",
          thumbnailLoc: new URL(meta.thumbnail_url),
        },
      ],
    };
  });

  const fields = videos.map((video) => {
    return {
      loc: video.link,
      lastmod: new Date().toISOString(),
      videos: video.videos,
    };
  });

  return getServerSideSitemapLegacy(ctx, fields);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
