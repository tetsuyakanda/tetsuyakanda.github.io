import React from "react";
import styled from "styled-components";

import { rhythm } from "../../styles/typography";

import Author from "./author";
import Ym from "./ym";
import Contents from "./contents";
import Badge from "../badge";

const CiteItem = ({ lang, papers }) => {
  const items = papers.map((c) => (
    <Li key={c.id}>
      <Author lang={lang} language={c.language} author={c.author} />:
      <br />
      <PaperTitle title={c.title} />,
      <br />
      <Contents cite={c} lang={lang} />,{" "}
      <Ym
        lang={lang}
        label={c.citation_label}
        date_parts={c.issued.date_parts}
      />
      {(c.URL || c.DOI) && <br />}
      {c.URL && <URL url={c.URL} />}
      {c.DOI && <DOI doi={c.DOI} />}
    </Li>
  ));

  return <ul>{items}</ul>;
};

const PaperTitle = ({ title }) => {
  return (
    <span>
      &ldquo;
      <span className="paperTitle">{title}</span>
      &rdquo;
    </span>
  );
};

const URL = ({ url }) => {
  return <Badge title="detail" link={url} />;
};

const DOI = ({ doi }) => {
  return <Badge title="DOI" content={doi} link={"https://​doi.org/" + doi} />;
};

const Li = styled.li`
  margin-bottom: ${rhythm(0.3)};
`;

export default CiteItem;
