module.exports = {
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
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
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
