module.exports = {
  swcMinify: false, // replacing Terser for minification
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // if (isServer) {
    //   require("./lib/generate-sitemap");
    // }

    const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
        generateStatsFile: true,
        reportFilename: isServer ? "../analyze/server.json" : "./analyze/client.json",
      })
    );

    return config;
  },
};
