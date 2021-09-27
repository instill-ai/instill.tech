module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.black"),
            h1: {
              fontWeight: "800",
              letterSpacing: theme("letterSpacing.wide"),
              color: theme("colors.brblack"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.wide"),
              color: theme("colors.brblack"),
            },
            h3: {
              fontWeight: "700",
              color: theme("colors.brblack"),
            },
            "h4, h5, h6": {
              fontWeight: "500",
              color: theme("colors.black")
            },
            ol: {
              li: {
                '&:before': { color: theme('colors.black') },
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.black') },
              },
            },
            strong: {
              fontWeight: 800,
              color: theme("colors.black"),
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
              color: theme("colors.indigo.800"),
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
              }
            },
            blockquote: {
              color: theme("colors.brblack"),
              borderLeftColor: theme("colors.black"),
              backgroundColor: theme("colors.white"),
              paddingBottom: "1px",
              paddingTop: "1px"
            },
            hr: {
              borderColor: theme("colors.gray"),
            }
          },
        },
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
