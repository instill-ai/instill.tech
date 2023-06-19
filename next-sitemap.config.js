// const { getMarkdownVideoMeta } = require("get-markdown-video-meta");

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.instill.tech";

// async function getAllVideosMetaData() {
//   const videosMeta = await getMarkdownVideoMeta({
//     provider: "youtube",
//     targets: ["/blog", "/tutorials"],
//     mdxComponents: [{ componentName: "Youtube", propName: "id" }],
//     verbose: true,
//   });

//   return videosMeta;
// }

// const videosMeta = getAllVideosMetaData();
const videosMeta = [
  {
    title: "VDP Cow Counter dashboard demo - output video with detections",
    author_name: "Instill AI",
    author_url: "https://www.youtube.com/@instillai6692",
    thumbnail_height: 360,
    thumbnail_width: 480,
    thumbnail_url: "https://i.ytimg.com/vi/jokydabr70M/hqdefault.jpg",
    html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/jokydabr70M?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="VDP Cow Counter dashboard demo - output video with detections"></iframe>',
    id: "jokydabr70M",
    url: "https://www.youtube.com/watch?v=jokydabr70M",
  },
  {
    title:
      "How to Build a Cow Counter Dashboard Using VDP, PostgreSQL & Metabase",
    author_name: "Instill AI",
    author_url: "https://www.youtube.com/@instillai6692",
    thumbnail_height: 360,
    thumbnail_width: 480,
    thumbnail_url: "https://i.ytimg.com/vi/0Rdv8oqqxfw/hqdefault.jpg",
    html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/0Rdv8oqqxfw?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="How to Build a Cow Counter Dashboard Using VDP, PostgreSQL &amp; Metabase"></iframe>',
    id: "0Rdv8oqqxfw",
    url: "https://www.youtube.com/watch?v=0Rdv8oqqxfw",
  },
  {
    title: "VDP Cow Counter dashboard demo - drone video of a cattle farm",
    author_name: "Instill AI",
    author_url: "https://www.youtube.com/@instillai6692",
    thumbnail_height: 360,
    thumbnail_width: 480,
    thumbnail_url: "https://i.ytimg.com/vi/bIQF2O3Z_xU/hqdefault.jpg",
    html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/bIQF2O3Z_xU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="VDP Cow Counter dashboard demo - drone video of a cattle farm"></iframe>',
    id: "bIQF2O3Z_xU",
    url: "https://www.youtube.com/watch?v=bIQF2O3Z_xU",
  },
  {
    title: "VDP Cow Counter dashboard demo - output video with detections",
    author_name: "Instill AI",
    author_url: "https://www.youtube.com/@instillai6692",
    thumbnail_height: 360,
    thumbnail_width: 480,
    thumbnail_url: "https://i.ytimg.com/vi/jokydabr70M/hqdefault.jpg",
    html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/jokydabr70M?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="VDP Cow Counter dashboard demo - output video with detections"></iframe>',
    id: "jokydabr70M",
    url: "https://www.youtube.com/watch?v=jokydabr70M",
  },
];

/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: baseUrl,
  generateRobotsTxt: true,
  transform: async (config, path) => {
    if (!path.includes("/videos/")) {
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }
    if (path.includes("/videos/")) {
      const meta = videosMeta.find((meta) => path.includes(meta.id));
      if (meta) {
        return {
          loc: `${process.env.NEXT_PUBLIC_BASE_URL}/videos/${meta?.id}`,
          changefreq: config.changefreq,
          priority: config.priority,
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
          videos: [
            {
              title: meta?.title,
              description: "",
              thumbnailLoc: new URL(meta.thumbnail_url),
            },
          ],
        };
      }
    }
  },
};

module.exports = config;
