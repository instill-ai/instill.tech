const path = require("path");

module.exports = {
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "../src");
    config.resolve.alias["@/components"] = path.resolve(
      __dirname,
      "../src/components"
    );
    config.resolve.alias["@/hooks"] = path.resolve(__dirname, "../src/hooks");
    config.resolve.alias["@/mocks"] = path.resolve(__dirname, "../src/mocks");
    config.resolve.alias["@/lib"] = path.resolve(__dirname, "../src/lib");
    config.resolve.alias["@/pages"] = path.resolve(__dirname, "../src/pages");
    config.resolve.alias["@/styles"] = path.resolve(__dirname, "../src/styles");
    config.resolve.alias["@/types"] = path.resolve(__dirname, "../src/types");
    config.resolve.alias["@/utils"] = path.resolve(__dirname, "../src/utils");
    config.resolve.alias["@/contexts"] = path.resolve(
      __dirname,
      "../src/contexts"
    );
    return config;
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-next-router",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
