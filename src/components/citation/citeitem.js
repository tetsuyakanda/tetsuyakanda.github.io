import React from "react";

import Author from "./author";
import Ym from "./ym";
import Contents from "./contents";
import Badge from "../badge";

const CiteItem = ({ lang, papers }) => {
  const items = papers.map((c) => (
    <li key={c.id}>
      <Author lang={lang} language={c.language} author={c.author} />:
      <br />
      <PaperTitle title={c.title} />,
      <br />
      <Contents cite={c} lang={lang} />,{" "}
      <Ym
        lang={lang}
        label={c.citation_key}
        date_parts={c.issued.date_parts}
      />
      {(c.URL || c.DOI) && " "}
      {c.URL && <URL url={c.URL} />}
      {c.DOI && <DOI doi={c.DOI} />}
    </li>
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

export default CiteItem;
