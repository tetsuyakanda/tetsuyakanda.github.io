import React from "react"

const PP = ({page}) => {
  return page ? <span>pp.{page}, </span>: null
}

const Ctitle = ({collection_title}) => {
  // some conferences has no abbreviations.
  return collection_title ? <span>({collection_title})</span>: null
}

const PosterSession = ({lang, language}) => {
  return(
    <span>
      {(lang === `ja` && language === `Japanese`) ? "ポスター発表, " : "poster session, "}
    </span>
  )
}

const Poster = ({cite, lang}) => {
  return (
    <span>
      {cite.container_title} <Ctitle collection_title={cite.collection_title} /> <PosterSession lang={lang} language={cite.language} />
      <PP page={cite.page} /> {cite.publisher_place}
    </span>
  )
}

export default Poster