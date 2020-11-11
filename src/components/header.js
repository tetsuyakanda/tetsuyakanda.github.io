import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { injectIntl, FormattedMessage } from "react-intl"
import KanjiImg from "./kanji"

const ListLink = ({ menu, langKey }) => {
  console.log(menu);
  return menu.map(item => {
    const slug = `/${langKey}${item.slug}`
    console.log(slug)
    return(
      <FormattedMessage id={item.label}>
            {(label) =>
            <Link to={slug}>{label}</Link>
            }
      </FormattedMessage>
    )
  });
}

const Header = ({ menu, langKey }) => (
  <header
    style={{
      background: `green`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <FormattedMessage id="title" />
        </Link><br />
        <span style={{ fontSize: `1.75rem` }}>KANDA, Tetsuya</span>
      </h1>

    </div>
    <nav>
      <ListLink menu={menu} langKey = {langKey} />
    </nav>
  </header>
)

Header.propTypes = {
  menu: PropTypes.array,
  langKey: PropTypes.string,
}

export default Header
