/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { IntlProvider, FormattedMessage } from 'react-intl'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'

import Header from "./header"
import en from "../data/en"
import ja from "../data/ja"
import "./layout.css"

const messages = { en, ja };

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          languages {
            defaultLangKey
            langs
          } 
          menu {
            label
            slug
          }
        }
      }
    }
  `)
  const url = location.pathname;
  const { title, menu } = data.site.siteMetadata;
  console.log(menu);
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));  
  return (
    <IntlProvider locale={langKey} messages={messages[langKey]}>
      <Header siteTitle={title} menu={menu} langKey={langKey}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </IntlProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
