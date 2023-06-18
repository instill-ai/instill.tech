/** @type {import('next-sitemap').IConfig} */

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.instill.tech";

const config = {
  siteUrl: baseUrl,
  generateRobotsTxt: true,
  exclude: ["/videos.xml"],
  transform: async (config, path) => {
    if (!path.includes("/videos/")) {
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }
  },
  robotsTxtOptions: {
    additionalSitemaps: [`${baseUrl}/videos.xml`],
  },
};

module.exports = config;
