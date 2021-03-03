const theme = {
  baseFontSize: `18px`,
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
  headerColor: "hsla(0,10%,10%,0.9)",
  bodyColor: "hsla(150,100%,6%,0.9)",
  blockMarginBottom: 1,
  overrideStyles: ({ scale, rhythm }, options, styles) => ({
    'h1': {
      letterSpacing: '0.04em',
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1.20,
      marginBottom: rhythm(0.5),
    },
    '.was': {
      color: "#999999",
    },
    '.itsme': {
      textDecoration: "underline",
    },
    'li': {
      marginBottom: rhythm(0.25), 
    },
    'ul': {
      listStyleType: "none",
    },
    'ul:before': {
      listStyleType: "none",
    }
  })
};

export default theme;
