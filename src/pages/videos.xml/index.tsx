import { getServerSideSitemapLegacy } from "next-sitemap";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const videos = [
    {
      link: "https://www.instill.tech/videos/0Rdv8oqqxfw",
      videos: [
        {
          title:
            "How to Build a Cow Counter Dashboard Using VDP, PostgreSQL & Metabase",
          description: "Video description",
          thumbnailLoc: new URL(
            "https://i.ytimg.com/vi/0Rdv8oqqxfw/maxresdefault.jpg"
          ),
        },
      ],
    },
    {
      link: "https://www.instill.tech/videos/bIQF2O3Z_xU",
      videos: [
        {
          title:
            "VDP Cow Counter dashboard demo - drone video of a cattle farm",
          description: "Video description",
          thumbnailLoc: new URL(
            "https://i.ytimg.com/vi/bIQF2O3Z_xU/maxresdefault.jpg"
          ),
        },
      ],
    },
    {
      link: "https://www.instill.tech/videos/jokydabr70M",
      videos: [
        {
          title:
            "VDP Cow Counter dashboard demo - output video with detections",
          description: "Video description",
          thumbnailLoc: new URL(
            "https://i.ytimg.com/vi/jokydabr70M/maxresdefault.jpg"
          ),
        },
      ],
    },
  ];

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
