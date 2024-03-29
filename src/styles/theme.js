const theme = {
  baseFontSize: `16px`,
  baseLineHeight: 1.4,
  scale: 2,
  headerFontFamily: [`Noto Serif JP`, `serif`],
  bodyFontFamily: [`Sawarabi Mincho`, `serif`],
  googleFonts: [
    {
      name: `Noto Serif JP`,
      styles: [`900`],
    },
    {
      name: `Sawarabi Mincho`,
      styles: [`400`],
    },
  ],
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: "bold",
  headerColor: "hsla(150,100%,6%,0.9)",
  bodyColor: "hsla(150,100%,12%,0.9)",
  blockMarginBottom: 1,
  overrideStyles: ({ scale, rhythm }, options, styles) => ({
    h1: {
      letterSpacing: "0.04em",
    },
    "h1,h2,h3,h4,h5,h6": {
      lineHeight: rhythm(1.5),
      marginBottom: rhythm(0.5),
    },
    ".was": {
      color: "#999999",
    },
    ".itsme": {
      textDecoration: "underline",
    },
    ".paperTitle": {
      fontWeight: "bolder",
    },
    li: {
      marginBottom: rhythm(0.25),
    },
    "li ul": {
      marginTop: rhythm(0.1),
    },
    "div#lf": {
      marginBottom: rhythm(1),
    },
    a: {
      color: "hsla(150,100%,25%,0.9)",
    },
  }),
};

export default theme;
