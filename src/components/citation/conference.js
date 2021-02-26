import React from "react"

const PP = ({page}) => {
  // very rare but some conferences provides individual pdf files without page numbers.
  return page ? <span>pp.{page}, </span>: null
}

const Ctitle = ({collection_title}) => {
  // some conferences has no abbreviations.
  return collection_title ? <span>({collection_title})</span>: null
}

const Conference = ({cite}) => {
  return (
    <span>
      {cite.container_title} <Ctitle collection_title={cite.collection_title} />, <PP page={cite.page} /> {cite.publisher_place}
    </span>
  )
}

export default Conference