import React from "react"

import Conference from "./conference"

const Poster = ({cite}) => {
    console.log(cite)
    return (cite.page) ? <Conference cite={cite} /> : <span>{cite.container_title}</span>
}

export default Poster