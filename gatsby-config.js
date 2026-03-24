module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `KANDA Tetsuya`,
    description: `Webpage of KANDA Tetsuya, Associate Professor at Notre Dame Seishin University`,
    author: `@tetsuyakanda`,
    languages: {
      langs: [`en`, `ja`],
      defaultLangKey: `en`,
    },
    menu: [
      { label: "home", slug: "/" },
      { label: "about", slug: "/about/" },
      { label: "publications", slug: "/publications/" },
      { label: "activity", slug: "/activity/" },
      { label: "lecture", slug: "/lecture/" },
      { label: "others", slug: "/others/" },
    ],
    basePath: `/`,
    social: {
      twitter: `https://twitter.com/tetsuyakanda`,
      github: `https://github.com/tetsuyakanda`
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1b8d54`,
        theme_color: `#1b8d54`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: true
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bib`,
        path: `${__dirname}/src/bib`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `@tetsuyakanda/gatsby-transformer-citationjs`,
  ],
}
