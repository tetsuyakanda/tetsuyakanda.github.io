import React from "react"

const Conference = ({cite}) => {
  return (
    <span>{cite.container_title} ({cite.collection_title}), pp.{cite.page}, {cite.publisher_place}</span>
  )
}

export default Conference