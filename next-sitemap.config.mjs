import { getMarkdownVideoMeta } from "get-markdown-video-meta";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.instill.tech";

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

    const metas = await getMarkdownVideoMeta({
      provider: "youtube",
      targets: ["blog", "tutorials"],
      mdxComponents: [{ componentName: "Youtube", propName: "id" }],
      verbose: false,
    });

    const youtubeId = path.split("/videos/")[1];
    const targetMeta = metas.find((meta) => meta.id === youtubeId);
    if (targetMeta) {
      return {
        loc: `${process.env.NEXT_PUBLIC_BASE_URL}/videos/${targetMeta?.id}`,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        videos: [
          {
            title: targetMeta.title,
            description: "",
            thumbnailLoc: new URL(targetMeta.thumbnail_url),
          },
        ],
      };
    }
  },
};

export default config;
