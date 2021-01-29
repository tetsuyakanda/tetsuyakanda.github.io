import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const SelectLanguage = ({ langs }) => {
  const links = langs.map(({ langKey, link, selected }) => (
    <Li key={langKey}>
      <LangLink key={langKey} to={link} selected={selected}>
        {langKey}
      </LangLink>
    </Li>
  ));

  return (
    <nav>
      <ul>{links}</ul>
    </nav>
  );
};

const Li = styled.li`
  &:nth-child(n + 2):before {
    content: '/';
  }
  display: inline-block;
`;

const LangLink = styled(Link)`
  text-transform: uppercase;
`;

SelectLanguage.propTypes = {
  langs: PropTypes.array,
};

export default SelectLanguage;