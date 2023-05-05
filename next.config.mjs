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
import { redirect } from "next/dist/server/api-utils/index.js";

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
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    domains: ["t2564371.p.clickup-attachments.com"],
  },
  webpack: (config, { isServer, dev }) => {
    // if (isServer) {
    //   require("./lib/generate-sitemap");
    // }

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
  async redirects() {
    return [
      {
        source: "/tos",
        destination: "https://www.iubenda.com/terms-and-conditions/60558066",
        permanent: false,
      },
    ];
  },
};

export default withMDX(nextConfig);
