import React from "react";

const PP = ({ page }) => {
  return page ? <span>pp.{page}, </span> : null;
};

const Ctitle = ({ container_title, collection_title }) => {
  // some conferences has no abbreviations.
  return collection_title
    ? <>{container_title} ({collection_title})</>
    : <>{container_title}</>;
};

// const PosterSession = ({ lang, language }) => {
//   return (
//     <span>
//       {lang === `ja` && language === `Japanese`
//         ? "ポスター発表, "
//         : "poster session, "}
//     </span>
//   );
// };

const Poster = ({ cite, lang }) => {
  return (
    <span>
      <Ctitle container_title={cite.container_title} collection_title={cite.collection_title} />
      {" "}
      <PP page={cite.page} /> {cite.publisher_place}
    </span>
  );
};

export default Poster;
