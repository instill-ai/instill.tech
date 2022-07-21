const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
        instillRed: "#FF5353",
        instillGreen: "#28F67E",
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
        max: "1450px", // We have 10px buffer
        tall: { raw: "(min-height: 800px)" },
        short: { raw: "(min-height: 600px and max-height: 800px)" },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: theme("fontFamily.mono")[0],
              fontWeight: "600",
              letterSpacing: theme("letterSpacing.wide"),
            },
            h2: {
              fontFamily: theme("fontFamily.mono")[0],
              fontWeight: "500",
              letterSpacing: theme("letterSpacing.wide"),
            },
            h3: {
              fontFamily: theme("fontFamily.mono")[0],
              fontWeight: "400",
            },
            strong: {
              fontWeight: 600,
            },
            code: {
              fontSize: theme("fontSize.base"),
              fontWeight: 600,
              borderRadius: "0.5rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              paddingTop: "0.125rem",
              paddingBottom: "0.125rem",
              wordBreak: "break-word",
            },
            a: {
              fontWeight: 600,
            },
            pre: {
              code: {
                fontWeight: 300,
                paddingLeft: "0rem",
                paddingRight: "0rem",
                paddingTop: "0rem",
                paddingBottom: "0rem",
              },
            },
            blockquote: {
              paddingBottom: "1px",
              paddingTop: "1px",
            },
            th: {
              fontWeight: 600,
            },
            ul: {
              li: {
                marginTop: "20px",
                marginBottom: "20px",
              },
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
            "--tw-prose-bullets": theme("colors.instillGrey15"),
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
  plugins: [require("@tailwindcss/typography")],
};
