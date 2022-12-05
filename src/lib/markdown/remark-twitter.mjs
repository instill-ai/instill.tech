/**
 * Reference:
 * - https://github.com/danvega/gridsome-plugin-remark-twitter
 * - https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/oembed-api
 */

import { visit } from "unist-util-visit";
import axios from "axios";

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export function remarkTwitter(options = {}) {
  return async (tree, file) => {
    const promises = [];
    visit(tree, visitor);
    await Promise.all(promises);

    function visitor(node) {
      if (
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      ) {
        if (node.name !== "twitter") return;

        if (node.type === "textDirective") {
          file.fail("Text directives for `twitter` not supported", node);
        }

        const url = node.attributes.url || null;

        if (!url) {
          file.fail("Missing twitter block url", node);
        }

        if (url.includes("?")) {
          file.fail("Please remove additional query param", node);
        }

        const embedOptions = {
          url: url,

          // When set to dark, the timeline is displayed with light text over a dark background
          theme: options.theme || "light",

          // Collection timelines only. Set to grid to display Tweets in a grid layout
          widget_type: options.widgetType || "",

          // Do not include a script element in the response
          omit_script: options.omitScript || false,

          // When set to true, the timeline and its embedded page on your site are not used for
          // purposes that include personalized suggestions and personalized ads
          dnt: true,

          // Display up to N items where N is a value between 1 and 20 inclusive
          limit: 20,

          // Remove a timeline display component with space-separated tokens
          chrome: "nofooter",
        };

        const params = Object.entries(embedOptions)
          .map(([key, value]) => `${key}=${value}`)
          .join("&");

        const p = axios
          .get(`https://publish.twitter.com/oembed?${params}`)
          .then((res) => {
            node.type = "html";

            // Center twitter widget
            node.value = res.data.html.replace(
              "twitter-tweet",
              "twitter-tweet tw-align-center"
            );

            node.children = null;
          })
          .catch((err) => {
            console.log(err);
            file.fail(`Provided twitter link url is not found - ${url}`);
          });

        promises.push(p);
      }
    }
  };
}
