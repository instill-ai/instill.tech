import * as gh from "@actions/core";
import fs from "fs";

const metrics = [
  "first-contentful-paint",
  "interactive",
  "speed-index",
  "total-blocking-time",
  "largest-contentful-paint",
  "cumulative-layout-shift",
];

/**
 * Reads Lighthouse JSON report and posts the main metrics
 * to GitHub job summary
 * https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#outputdir
 */
export default function postSummary(manifest, title) {
  title = title || "Lighthouse Performance";

  gh.summary
    .addHeading(`${title} ${performance}`)
    .addTable([
      [
        { data: "Metric", header: true },
        { data: "Time", header: true },
        { data: "Eval", header: true },
      ],
      ["Performance", manifest.summary.performance],
      ["Accessibility", manifest.summary.accessibility],
      ["Best Practices", manifest.summary["best-practices"]],
      ["SEO", manifest.summary.seo],
    ])
    .write();
}

module.exports = { postSummary };
