import React from "react"

import Author from "./author"
import Ym from "./ym"
import Contents from "./contents"

const CiteItem = ({lang, papers}) => {
  const items = papers.map((c) => 
  <div key={c.id}>
    <Author lang={lang} language={c.language} author={c.author}/>
    : <span>&ldquo;{c.title}&rdquo;</span>
    , <Contents cite={c} />
    , <Ym lang={lang} label={c.citation_label} date_parts={c.issued.date_parts}/>
  </div>)

  return (
    <div>
      {items}
    </div>
  )
}

  export default CiteItem