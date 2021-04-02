module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `KANDA, Tetsuya`,
    description: `Assistant Professor, Osaka University`,
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
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
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bib`,
        path: `${__dirname}/src/bib`,
      },
    },
    `@tetsuyakanda/gatsby-transformer-citationjs`
  ],
}
