import mdx from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import remarkDirective from "remark-directive";
import remarkRehype from "remark-rehype";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { remarkCodeHike } from "@code-hike/mdx";
import { readFile } from "fs/promises";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { h } from "hastscript";
// import { remarkInfoBlock } from "./src/lib/markdown/remark-info-block.mjs";
import { remarkYoutube } from "./src/lib/markdown/remark-youtube.mjs";
import {
  infoBlockHeader,
  infoBlockChildren,
} from "./src/lib/markdown/rehype-info-block-handler.mjs";
import path from "path";
import { LATEST_VERSIONS } from "./version.mjs";
import { withNextVideo } from "next-video/process";

const theme = JSON.parse(
  await readFile(new URL("./src/styles/rose-pine-moon.json", import.meta.url))
);

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkDirective,
      // remarkInfoBlock,
      [remarkYoutube, { validateYoutubeLink: true }],
      remarkGfm,
      [remarkCodeHike, { theme, lineNumbers: false, showCopyButton: true }],
    ],
    rehypePlugins: [
      [remarkRehype, { handlers: { infoBlockHeader, infoBlockChildren } }],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          properties: { class: "heading-anchor" },
          content(node) {
            return h("span", { class: "heading-anchor-hash" }, ["#"]);
          },
        },
      ],
    ],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "mp4", "vtt"],
  i18n: {
    locales: ["en", "zh-CN"],
    defaultLocale: "en",
  },
  localePath: path.resolve("./public/locales"),
  images: {
    domains: ["t2564371.p.clickup-attachments.com"],
  },
  experimental: {
    proxyTimeout: 1000 * 120,
  },
  webpack: (config, { isServer, dev }) => {
    // if (isServer) {
    //   require("./lib/generate-sitemap");
    // }

    config.resolve.fallback = { fs: false };

    if (!dev) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "disabled",
          generateStatsFile: true,
        })
      );
    }

    return config;
  },
};

export default withNextVideo(withMDX(nextConfig));
