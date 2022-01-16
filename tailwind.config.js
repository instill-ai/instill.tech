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
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.instillGray30"),
            h1: {
              fontFamily: theme("fontFamily.mono")[0],
              fontWeight: "600",
              letterSpacing: theme("letterSpacing.wide"),
              color: theme("colors.instillGray15"),
            },
            h2: {
              fontFamily: theme("fontFamily.mono")[0],
              fontWeight: "500",
              letterSpacing: theme("letterSpacing.wide"),
              color: theme("colors.instillGray15"),
            },
            h3: {
              fontFamily: theme("fontFamily.mono")[0],
              fontWeight: "400",
              color: theme("colors.instillGray15"),
            },
            ol: {
              li: {
                "&:before": { color: theme("colors.black") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.black") },
              },
            },
            strong: {
              fontWeight: 600,
              color: theme("colors.instillGray15"),
            },
            code: {
              fontSize: theme("fontSize.base"),
              fontWeight: 600,
              color: theme("colors.black"),
              backgroundColor: theme("colors.green.300"),
              borderRadius: "0.5rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              paddingTop: "0.125rem",
              paddingBottom: "0.125rem",
              wordBreak: "break-word",
            },
            a: {
              color: theme("colors.instillBlue30"),
              fontWeight: 600,
            },
            pre: {
              color: theme("colors.white"),
              backgroundColor: theme("colors.black"),
              code: {
                fontWeight: 300,
                color: theme("colors.white"),
                backgroundColor: theme("colors.black"),
                paddingLeft: "0rem",
                paddingRight: "0rem",
                paddingTop: "0rem",
                paddingBottom: "0rem",
              },
            },
            blockquote: {
              color: theme("colors.brblack"),
              borderLeftColor: theme("colors.black"),
              backgroundColor: theme("colors.white"),
              paddingBottom: "1px",
              paddingTop: "1px",
            },
            hr: {
              borderColor: theme("colors.gray"),
            },
            th: {
              color: theme("colors.instillGray15"),
              fontWeight: 600,
            },
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
