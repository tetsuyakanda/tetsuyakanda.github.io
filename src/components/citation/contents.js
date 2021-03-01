import React from "react"

import Conference from "./conference"
import Journal from "./journal"
import TechRep from "./techrep"
import Poster from "./poster"


const Contents = ({cite}) => {
  if(!cite.issued.date_parts[0][1]){
    return <span>{cite.container_title} (to appear)</span>
  }
  switch(cite.genre){
    case `conf`:
    case `j_conf`:
      return <Conference cite={cite} />
    case `journal`:
      return <Journal cite={cite} />
    case `tech`:
      return <TechRep cite={cite} />
    case `poster`:
      return <Poster cite={cite} />
    default:
      return <span>{cite.genre} still undef.</span>
  }
}

export default Contents