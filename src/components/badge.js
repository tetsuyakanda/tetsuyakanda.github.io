import React from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";

const Badge = ({ title, content, color, link }) => {
  return (
    <Span>
      <A href={link}>
        <Title>{title}</Title>
        {content && <R>{content}</R>}
      </A>
    </Span>
  );
};

const A = styled.a.attrs((props) => ({
  target: "_blank",
  rel: "noopener norefferer",
}))`
  text-decoration: none;
`;

const Span = styled.span`
  font-size: 11px;
  padding: 0px 0px;
  margin: 0px 4px;
  border: 1px solid hsla(150, 100%, 20%, 0.9);
  border-radius: 4px;
`;

const Title = styled.span`
  background-color: hsla(150, 100%, 30%, 0.9);
  color: white;
  padding: 0px 4px;
  margin: 0px;
`;

const R = styled.span`
  background-color: hsla(150, 100%, 90%);
  color: hsla(150, 100%, 20%, 0.9);
  padding: 0px 4px;
  margin: 0px;
`;

export default injectIntl(Badge);
