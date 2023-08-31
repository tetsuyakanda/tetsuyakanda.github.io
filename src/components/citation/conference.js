import React from "react";

const PP = ({ page }) => {
  // very rare but some conferences provides individual pdf files without page numbers.
  return page ? <span>pp.{page}, </span> : null;
};

const Vol = ({ volume }) => {
  // some domestic conf does not have vol
  return volume ? <span>vol.{volume}, </span> : null;
};

const No = ({ number }) => {
  // some domestic conf does not have number
  return number ? <span>no.{number}, </span> : null;
};

const Ctitle = ({ container_title, collection_title }) => {
  // some conferences has no abbreviations.
  return collection_title
    ? <>{container_title} ({collection_title})</>
    : <>{container_title}</>;
};

const Conference = ({ cite }) => {
  return (
    <span>
      <Ctitle container_title={cite.container_title} collection_title={cite.collection_title} />
      , <Vol volume={cite.volume} />
      <No number={cite.number} />
      <PP page={cite.page} /> {cite.publisher_place}
    </span>
  );
};

export default Conference;
