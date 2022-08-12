const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@instill-ai/design-system/build/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary_colour_light_blue: "#40A8F5",
        secondary_colour_black: "#1A1A1A",
        highlight_colour_blue: "#0000FF",
        colour_light_grey: "#F6F6F5",
        dark_blue: "#002357",
        instill_green: "#28F67E",
        instill_gray: "#A5A5A5",
        instill_red: "#FF5353",
        instill_yellow: "#FFDF3A",
        instill_light_blue: "#F4FBFF",
        instill_light_yellow: "#FFFCEB",
        instillGrey95: "#1A1A1A",
        instillGrey80: "#5c5c5c",
        instillGrey70: "#8C8A8A",
        instillGrey50: "#A5A5A5",
        instillGrey30: "#C0C0C0",
        instillGrey15: "#E8E8E8",
        instillGrey05: "#F6F6F6",
        instillBlue: "#0000FF",
        instillBlue85: "#002050",
        instillBlue80: "#0268B5",
        instillBlue70: "#003381",
        instillBlue50: "#40A8F5",
        instillBlue10: "#F4FBFF",
        instillYellow: "#FFDF3A",
        instillYellow10: "#FFFCEB",
        instillLemonYellow05: "#FFFCE3",
        instillLemonYellow05: "#DEC800",
        instillNeonBlue05: "#EDEDFF",
        instillNeonBlue50: "#0000FF",
        instillRed: "#FF5353",
        instillRed10: "#FFF1F1",
        instillGreen: "#28F67E",
        instillGreen05: "#ECFFF0",
        instillGreen50: "#02D12F",
      },
      fontFamily: {
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        instill: ["instill", "IBM Plex Mono"],
      },
      margin: {
        15: "60px",
      },
      flex: {
        "33%": "0 0 33%",
      },
      boxShadow: {
        instillMd: "0px 0px 12px rgba(0, 0, 255, 0.22)",
        instillRound: "4px 4px 8px rgba(129, 129, 129, 0.22);",
      },
      screens: {
        xx: "320px",
        xs: "480px",
        max: "1440px",
        tall: { raw: "(min-height: 800px)" },
        short: { raw: "(min-height: 600px and max-height: 800px)" },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme("fontFamily.sans")[0],
              fontWeight: "600",
              lineHeight: "40px",
              fontSize: "28px",
              letterSpacing: theme("letterSpacing.tight"),
            },
            h2: {
              fontFamily: theme("fontFamily.sans")[0],
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "32px",
              borderTopWidth: "1px",
              borderStyle: "solid",
              paddingTop: "28px",
              marginTop: "48px",
              letterSpacing: theme("letterSpacing.tight"),
            },
            h3: {
              fontFamily: theme("fontFamily.sans")[0],
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "28px",
            },
            code: {
              paddingTop: "3px",
              paddingBottom: "3px",
              paddingRight: "6px",
              paddingLeft: "6px",
              backgroundColor: theme("colors.instillBlue10"),
              color: theme("colors.instillBlue50"),
              borderRadius: "2px",
              marginRight: "2px",
              marginLeft: "2px",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },

            // We have implemented rehype-autolink-headings that will wrap a tag in headings
            // This config will cancel natural a tag style under headings
            "h1 a,h2 a,h3 a,h4 a,h5 a": {
              color: theme("colors.instillGrey95"),
              textDecorationLine: "none",
            },
          },
        },
        black: {
          css: {
            "--tw-prose-body": theme("colors.instillGrey95"),
            "--tw-prose-headings": theme("colors.instillGrey95"),
            "--tw-prose-lead": theme("colors.instillGrey95"),
            "--tw-prose-links": theme("colors.instillBlue50"),
            "--tw-prose-bold": theme("colors.instillGrey95"),
            "--tw-prose-counters": theme("colors.instillGrey95"),
            "--tw-prose-bullets": theme("colors.instillGrey95"),
            "--tw-prose-hr": theme("colors.instillGrey30"),
            "--tw-prose-quotes": theme("colors.instillGrey95"),
            "--tw-prose-quote-borders": theme("colors.instillGrey30"),
            "--tw-prose-captions": theme("colors.instillGrey80"),
            "--tw-prose-code": theme("colors.instillGrey95"),
            "--tw-prose-pre-code": theme("colors.instillGrey15"),
            "--tw-prose-pre-bg": theme("colors.instillGrey95"),
            "--tw-prose-th-borders": theme("colors.instillGrey30"),
            "--tw-prose-td-borders": theme("colors.instillGrey30"),
          },
        },
        white: {
          css: {
            "--tw-prose-body": theme("colors.instillGrey15"),
            "--tw-prose-headings": theme("colors.instillGrey15"),
            "--tw-prose-lead": theme("colors.instillGrey15"),
            "--tw-prose-links": theme("colors.instillBlue50"),
            "--tw-prose-bold": theme("colors.instillGrey15"),
            "--tw-prose-counters": theme("colors.instillGrey15"),
            "--tw-prose-bullets": theme("colors.instillGrey95"),
            "--tw-prose-hr": theme("colors.instillGrey30"),
            "--tw-prose-quotes": theme("colors.instillGrey15"),
            "--tw-prose-quote-borders": theme("colors.instillGrey15"),
            "--tw-prose-captions": theme("colors.instillGrey30"),
            "--tw-prose-code": theme("colors.instillGrey15"),
            "--tw-prose-pre-code": theme("colors.instillGrey95"),
            "--tw-prose-pre-bg": theme("colors.instillGrey15"),
            "--tw-prose-th-borders": theme("colors.instillGrey30"),
            "--tw-prose-td-borders": theme("colors.instillGrey30"),
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),

    // We have to use plugin to let intelligence pick up our custom classname's style
    // ref: https://github.com/tailwindlabs/tailwindcss-intellisense/issues/227
    ({ addUtilities }) => {
      addUtilities({
        ".text-instill-h1": {
          fontFamily: `IBM Plex Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
          fontSize: "32px",
          fontWeight: 500,
          lineHeight: "42px",
        },
        ".text-instill-h2": {
          fontFamily: `IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "26px",
        },
        ".text-instill-h3": {
          fontFamily: `IBM Plex Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "28px",
        },
        ".text-instill-body": {
          fontFamily: `IBM Plex Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "18px",
        },
        ".text-instill-bold-body": {
          fontFamily: `IBM Plex Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "18px",
        },
        ".text-instill-small": {
          fontFamily: `IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
          fontSize: "12px",
          fontWeight: 400,
          lineHeight: "16px",
        },
        ".instill-input-focus-shadow": {
          boxShadow: "0px 0px 0px 3px rgba(64, 168, 245, 0.2)",
        },
        ".instill-progress-message-box-shadow": {
          boxShadow: "2px 2px 5px 4px rgba(0, 0, 0, 0.04)",
        },
        ".instill-input-no-highlight": {
          "@apply focus:outline-none focus:ring-0 focus:ring-opacity-0": {},
        },
        ".instill-input-highlight": {
          "@apply focus:border-instillBlue50 focus:outline-none focus:ring-0 focus:ring-white":
            {},
        },
        ".instill-toggle-loading-shadow": {
          boxShadow: "0px 0px 0px 3px #FFFCE3",
        },
      });
    },
  ],
};
