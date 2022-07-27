import mdx from "@next/mdx";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["t2564371.p.clickup-attachments.com"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
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
