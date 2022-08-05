/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://www.instill.tech",
  generateRobotsTxt: true,
};

module.exports = config;
