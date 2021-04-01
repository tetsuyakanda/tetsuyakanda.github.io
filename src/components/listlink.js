import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

import { FormattedMessage } from "react-intl";

const ListLink = ({ menu, langKey }) => {
  const links = menu.map((item) => {
    const slug = `/${langKey}${item.slug}`;
    return (
      <FormattedMessage key={item.label} id={item.label}>
        {(label) => (
          <Li key={langKey}>
            <Link to={slug}>{label}</Link>
          </Li>
        )}
      </FormattedMessage>
    );
  });

  return (
    <nav>
      <ul>{links}</ul>
    </nav>
  );
};

const Li = styled.li`
  &:nth-child(n + 2):before {
    content: " / ";
  }
  display: inline-block;
`;

ListLink.propTypes = {
  menu: PropTypes.array,
  langKey: PropTypes.string,
};

export default ListLink;
