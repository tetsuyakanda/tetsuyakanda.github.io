import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Author from "./author"
import Ym from "./ym"
import Conference from "./conference"

// load all citations first, then filter with request

function switchEntryWithLang(cite, lang) {
  const ignoreSuffix = (lang === `ja`) ? `_E` : `_J`
  return !cite.citation_label.endsWith(ignoreSuffix)
}

function contents(cite) {
  switch(cite.genre){
    case `conf`:
      return <Conference cite={cite} />
    default:
      return <span>not conf</span>
  }
}

const Citation = ({lang}) => {

  const {allCitation} = useStaticQuery(graphql`
   query {
      allCitation {
        edges {
          node {
            author{
              given
              family
            }
            URL
            citation_label
            collection_title
            container_title
            genre
            id
            issue
            language
            issued {
              date_parts
            }
            number
            page
            publisher_place
            title
            type
            volume
          }
        }
      }
    } 
  `)
  const citations = allCitation.edges.map((c) => c.node)

  const paperList = citations.filter((c) => switchEntryWithLang(c, lang))
  .map((c) => {
    return (
      <div key={c.id}>
        <Author lang={lang} language={c.language} author={c.author}/>
        : <span>{c.title}</span>
        , {contents(c)}
        , <Ym lang={lang} label={c.citation_label} date_parts={c.issued.date_parts}/>
      </div>)
    }
  )

  return (
    <div>
      {paperList}
    </div>
  )
}

export default Citation