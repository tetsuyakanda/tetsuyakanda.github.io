import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import ListLink from "./listlink";
import SelectLanguage from "./selectLanguage";

const Header = ({ menu, langKey, langs }) => (
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
        </Link>
        <br />
        <span style={{ fontSize: `1.5rem`, color: "hsla(150,100%,65%)" }}>
          <FormattedMessage id="title_other" />
        </span>
      </h1>
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem`,
      }}
    >
      <Grid>
        <MenuContainer>
          <ListLink menu={menu} langKey={langKey} />
        </MenuContainer>
        <LanguageContainer>
          <SelectLanguage langs={langs} />
        </LanguageContainer>
      </Grid>
    </div>
  </header>
);

export const Grid = styled.div`
  display: grid;
  height: auto;
  grid-auto-flow: row;
  grid-auto-rows: minmax(20px, auto);
  grid-template-columns: 1fr 200px;
  gap: 8px;
`;

const MenuContainer = styled.div``;

const LanguageContainer = styled.div`
  text-align: right;
`;
Header.propTypes = {
  menu: PropTypes.array,
  langKey: PropTypes.string,
  langs: PropTypes.array,
};

export default Header;
