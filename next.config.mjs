import mdx from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { remarkCodeHike } from "@code-hike/mdx";
import { readFile } from "fs/promises";

const theme = JSON.parse(
  await readFile(new URL("./src/styles/slack-dark.json", import.meta.url))
);

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm,
      [remarkCodeHike, { theme, lineNumbers: false, showCopyButton: true }],
    ],
    rehypePlugins: [rehypeSlug],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
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
          reportFilename: isServer
            ? "../analyze/server.json"
            : "./analyze/client.json",
        })
      );
    }

    return config;
  },
};

export default withMDX(nextConfig);
