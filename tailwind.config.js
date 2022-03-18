const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
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
        instillGray95: "#1A1A1A",
        instillGray80: "#5c5c5c",
        instillGray70: "#8C8A8A",
        instillGray50: "#A5A5A5",
        instillGray30: "#C0C0C0",
        instillGray15: "#E8E8E8",
        instillGray05: "#F6F6F6",
        instillBlue: "#0000FF",
        instillBlue85: "#002050",
        instillBlue70: "#003381",
        instillBlue30: "#40A8F5",
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
        short: { raw: "(min-height: 600px)"}
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
            "--tw-prose-body": theme("colors.instillGray95"),
            "--tw-prose-headings": theme("colors.instillGray95"),
            "--tw-prose-lead": theme("colors.instillGray95"),
            "--tw-prose-links": theme("colors.instillBlue30"),
            "--tw-prose-bold": theme("colors.instillGray95"),
            "--tw-prose-counters": theme("colors.instillGray95"),
            "--tw-prose-bullets": theme("colors.instillGray95"),
            "--tw-prose-hr": theme("colors.instillGray30"),
            "--tw-prose-quotes": theme("colors.instillGray95"),
            "--tw-prose-quote-borders": theme("colors.instillGray30"),
            "--tw-prose-captions": theme("colors.instillGray80"),
            "--tw-prose-code": theme("colors.instillGray95"),
            "--tw-prose-pre-code": theme("colors.instillGray15"),
            "--tw-prose-pre-bg": theme("colors.instillGray95"),
            "--tw-prose-th-borders": theme("colors.instillGray30"),
            "--tw-prose-td-borders": theme("colors.instillGray30"),
          },
        },
        white: {
          css: {
            "--tw-prose-body": theme("colors.instillGray15"),
            "--tw-prose-headings": theme("colors.instillGray15"),
            "--tw-prose-lead": theme("colors.instillGray15"),
            "--tw-prose-links": theme("colors.instillBlue30"),
            "--tw-prose-bold": theme("colors.instillGray15"),
            "--tw-prose-counters": theme("colors.instillGray15"),
            "--tw-prose-bullets": theme("colors.instillGray15"),
            "--tw-prose-hr": theme("colors.instillGray30"),
            "--tw-prose-quotes": theme("colors.instillGray15"),
            "--tw-prose-quote-borders": theme("colors.instillGray15"),
            "--tw-prose-captions": theme("colors.instillGray30"),
            "--tw-prose-code": theme("colors.instillGray15"),
            "--tw-prose-pre-code": theme("colors.instillGray95"),
            "--tw-prose-pre-bg": theme("colors.instillGray15"),
            "--tw-prose-th-borders": theme("colors.instillGray30"),
            "--tw-prose-td-borders": theme("colors.instillGray30"),
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
