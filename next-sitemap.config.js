// get metadata for videos
async function getYoutubeMeta(youtubeId) {
  try {
    const videoUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
    const response = await fetch(
      `https://youtube.com/oembed?url=${videoUrl}&format=json`,
      { method: "GET" }
    );
    if (response.status === 404) {
      return;
    }
    const data = await response.json();
    const meta = {
      title: data.title,
      author_name: data.author_name,
      author_url: data.author_url,
      thumbnail_height: data.thumbnail_height,
      thumbnail_width: data.thumbnail_width,
      thumbnail_url: data.thumbnail_url,
      html: data.html,
      id: youtubeId,
      url: videoUrl,
    };
    return meta;
  } catch (err) {
    return Promise.reject(err);
  }
}


// next-sitemap-config.js
/** @type {import('next-sitemap').IConfig} */

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.instill.tech";

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
      const youtubeId = path.split("/videos/")[1];
      const meta = await getYoutubeMeta(youtubeId);
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
