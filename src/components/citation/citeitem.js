import React from "react";
import styled from "styled-components";
import { rhythm } from "../../styles/typography";

import Author from "./author";
import Ym from "./ym";
import Contents from "./contents";

const CiteItem = ({ lang, papers }) => {
  const items = papers.map((c) => (
    <Li key={c.id}>
      <Author lang={lang} language={c.language} author={c.author} />:{" "}
      <span>
        &ldquo;
        <span className="paperTitle">{c.title}</span>
        &rdquo;
      </span>
      , <Contents cite={c} lang={lang} />,{" "}
      <Ym
        lang={lang}
        label={c.citation_label}
        date_parts={c.issued.date_parts}
      />
    </Li>
  ));

  return <ul>{items}</ul>;
};

const Li = styled.li`
  margin-bottom: ${rhythm(0.3)};
`;

export default CiteItem;
