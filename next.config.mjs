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
  i18n: {
    locales: ["en", "zh_CN"],
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
  async redirects() {
    return [
      {
        source: "/tos",
        destination: "https://www.iubenda.com/terms-and-conditions/60558066",
        permanent: false,
      },
      {
        source: "/docs/start-here/configuration",
        destination: `/docs/${LATEST_VERSIONS["core"]}/core/configuration`,
        permanent: false,
      },
      {
        source: "/docs/start-here/faq",
        destination: `/docs/${LATEST_VERSIONS["core"]}/faq`,
        permanent: false,
      },
      {
        source: "/docs/start-here/getting-started",
        destination: `/docs/${LATEST_VERSIONS["core"]}/quickstart`,
        permanent: false,
      },
      {
        source: "/docs/start-here/roadmap",
        destination: `/docs/${LATEST_VERSIONS["core"]}/roadmap`,
        permanent: false,
      },
      {
        source: "/docs/deployment/overview",
        destination: `/docs/${LATEST_VERSIONS["core"]}/core/deployment`,
        permanent: false,
      },
      {
        source: "/docs/deployment/docker-compose",
        destination: `/docs/${LATEST_VERSIONS["core"]}/core/deployment/docker-compose`,
        permanent: false,
      },
      {
        source: "/docs/deployment/kubernetes-using-helm",
        destination: `/docs/${LATEST_VERSIONS["core"]}/core/deployment/kubernetes-using-helm`,
        permanent: false,
      },
      {
        source: "/docs/core-concepts/overview",
        destination: `/docs/${LATEST_VERSIONS["core"]}/core/concepts`,
        permanent: false,
      },
      {
        source: "/docs/core-concepts/ai-task",
        destination: `/docs/${LATEST_VERSIONS["core"]}/model/ai-task`,
        permanent: false,
      },
      {
        source: "/docs/core-concepts/data-connector",
        destination: `/docs/${LATEST_VERSIONS["core"]}/vdp/data-connector`,
        permanent: false,
      },
      {
        source: "/docs/core-concepts/pipeline",
        destination: `/docs/${LATEST_VERSIONS["core"]}/core/concepts/pipeline`,
        permanent: false,
      },
      {
        source: "/docs/source-connectors/overview",
        destination: `/docs/${LATEST_VERSIONS["core"]}/vdp/app-connector`,
        permanent: false,
      },
      {
        source: "/docs/destination-connectors/overview",
        destination: `/docs/${LATEST_VERSIONS["core"]}/vdp/data-connector`,
        permanent: false,
      },
      {
        source: "/docs/destination-connectors/airbyte",
        destination: `/docs/${LATEST_VERSIONS["core"]}/vdp/data-connectors/airbyte`,
        permanent: false,
      },
      {
        source: "/docs/prepare-models/overview",
        destination: `/docs/${LATEST_VERSIONS["core"]}/model/prepare`,
        permanent: false,
      },
      {
        source: "/docs/import-models/overview",
        destination: `/docs/${LATEST_VERSIONS["core"]}/model/import`,
        permanent: false,
      },
      {
        source: "/docs/import-models/artivc",
        destination: `/docs/${LATEST_VERSIONS["core"]}/model/import/artivc`,
        permanent: false,
      },
      {
        source: "/docs/import-models/github",
        destination: `/docs/${LATEST_VERSIONS["core"]}/model/import/github`,
        permanent: false,
      },
      {
        source: "/docs/import-models/huggingface",
        destination: `/docs/${LATEST_VERSIONS["core"]}/model/import/huggingface`,
        permanent: false,
      },
      {
        source: "/docs/import-models/local",
        destination: `/docs/${LATEST_VERSIONS["core"]}/model/import/local`,
        permanent: false,
      },
      // New documentation refactor 20230907
      {
        source: "/docs/welcome",
        destination: `/docs/${LATEST_VERSIONS["core"]}/welcome`,
        permanent: false,
      },
      {
        source: "/docs/quickstart",
        destination: `/docs/${LATEST_VERSIONS["core"]}/quickstart`,
        permanent: false,
      },
      {
        source: "/docs/base/configuration",
        destination: `/docs/base/${LATEST_VERSIONS["core"]}/configuration`,
        permanent: false,
      },
      {
        source: "/docs/base/getting-started",
        destination: `/docs/base/${LATEST_VERSIONS["core"]}/getting-started`,
        permanent: false,
      },
      {
        source: "/docs/base/welcome",
        destination: `/docs/base/${LATEST_VERSIONS["core"]}/welcome`,
        permanent: false,
      },
      {
        source: "/docs/cloud/getting-started",
        destination: `/docs/cloud/${LATEST_VERSIONS["cloud"]}/getting-started`,
        permanent: false,
      },
      {
        source: "/docs/cloud/using-instill-cloud",
        destination: `/docs/cloud/${LATEST_VERSIONS["cloud"]}/using-instill-cloud`,
        permanent: false,
      },
      {
        source: "/docs/cloud/welcome",
        destination: `/docs/cloud/${LATEST_VERSIONS["cloud"]}/welcome`,
        permanent: false,
      },
      {
        source: "/docs/core/contributing-guideline",
        destination: `/docs/core/${LATEST_VERSIONS["core"]}/contributing-guideline`,
        permanent: false,
      },
      {
        source: "/docs/core/faq",
        destination: `/docs/core/${LATEST_VERSIONS["core"]}/faq`,
        permanent: false,
      },
      {
        source: "/docs/core/getting-started",
        destination: `/docs/core/${LATEST_VERSIONS["core"]}/getting-started`,
        permanent: false,
      },
      {
        source: "/docs/core/system-architecture",
        destination: `/docs/core/${LATEST_VERSIONS["core"]}/system-architecture`,
        permanent: false,
      },
      {
        source: "/docs/core/welcome",
        destination: `/docs/core/${LATEST_VERSIONS["core"]}/welcome`,
        permanent: false,
      },
      {
        source: "/docs/vdp/configuration",
        destination: `/docs/vdp/${LATEST_VERSIONS["vdp"]}/configuration`,
        permanent: false,
      },
      {
        source: "/docs/vdp/license",
        destination: `/docs/vdp/${LATEST_VERSIONS["vdp"]}/license`,
        permanent: false,
      },
      {
        source: "/docs/vdp/deployment/docker-compose",
        destination: `/docs/vdp/${LATEST_VERSIONS["vdp"]}/deployment/docker-compose`,
        permanent: false,
      },
      {
        source: "/docs/vdp/deployment/kubernetes-using-helm",
        destination: `/docs/${LATEST_VERSIONS["vdp"]}/vdp/deployment/kubernetes-using-helm`,
        permanent: false,
      },
      {
        source: "/docs/vdp/deployment/overview",
        destination: `/docs/${LATEST_VERSIONS["vdp"]}/vdp/deployment/overview`,
        permanent: false,
      },
      {
        source: "/docs/vdp/development/setup-local-development",
        destination: `/docs/${LATEST_VERSIONS["vdp"]}/vdp/development/setup-local-development`,
        permanent: false,
      },
      {
        source: "/docs/vdp/operators/end",
        destination: `/docs/${LATEST_VERSIONS["vdp"]}/vdp/operators/end`,
        permanent: false,
      },
      {
        source: "/docs/vdp/operators/overview",
        destination: `/docs/${LATEST_VERSIONS["vdp"]}/vdp/operators/overview`,
        permanent: false,
      },
      {
        source: "/docs/vdp/operators/start",
        destination: `/docs/${LATEST_VERSIONS["vdp"]}/vdp/operators/start`,
        permanent: false,
      },
      {
        source: "/docs/sdk/overview",
        destination: `/docs/${LATEST_VERSIONS["vdp"]}/sdk/overview`,
        permanent: false,
      },
    ];
  },
};

export default withMDX(nextConfig);
