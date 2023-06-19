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
    // verbose: true,
  });

  // videosMeta = [
  //   {
  //     title: "VDP Cow Counter dashboard demo - output video with detections",
  //     author_name: "Instill AI",
  //     author_url: "https://www.youtube.com/@instillai6692",
  //     thumbnail_height: 360,
  //     thumbnail_width: 480,
  //     thumbnail_url: "https://i.ytimg.com/vi/jokydabr70M/hqdefault.jpg",
  //     html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/jokydabr70M?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="VDP Cow Counter dashboard demo - output video with detections"></iframe>',
  //     id: "jokydabr70M",
  //     url: "https://www.youtube.com/watch?v=jokydabr70M",
  //   },
  // ];

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
