import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import A from "./A.js";

const Badge = ({ title, content, color, link }) => {
  return (
    <Span>
      <Aa href={link}>
        <Title>
          <FormattedMessage id={title} />
        </Title>
        {content && <R>{content}</R>}
      </Aa>
    </Span>
  );
};

const Aa = styled(A)`
  text-decoration: none;
`;

const Span = styled.span`
  font-size: 11px;
  padding: 0px 0px;
  margin: 0px 4px;
  border: 1px solid hsla(150, 100%, 20%, 0.9);
  border-radius: 4px;
  white-space: nowrap;
`;

const Title = styled.span`
  background-color: hsla(150, 100%, 90%);
  color: hsla(150, 100%, 20%, 0.9);
  padding: 0px 4px;
  margin: 0px;
`;

const R = styled.span`
  background-color: white;
  color: hsla(150, 100%, 30%, 0.9);
  padding: 0px 4px;
  margin: 0px;
`;

export default Badge;
