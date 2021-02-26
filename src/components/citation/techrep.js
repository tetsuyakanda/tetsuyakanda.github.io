import React from "react"

const PP = ({page}) => {
  // very rare but some conferences provides individual pdf files without page numbers.
  return page ? <span>pp.{page}, </span>: null
}

const Vol = ({volume}) => {
  // some domestic conf does not have vol
  return volume ? <span>vol.{volume}, </span>: null
}

const No = ({number}) => {
  // some domestic conf does not have number
  return number ? <span>no.{number}, </span>: null
}

const TechRep = ({cite}) => {
  return (
    <span>
      {cite.container_title}, <Vol volume={cite.volume} /> <No number={cite.number} /><PP page={cite.page} /> {cite.publisher_place}
    </span>
  )
}

export default TechRep