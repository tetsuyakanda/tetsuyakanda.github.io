import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// load all citations first, then filter with request

const Citation = ({lang}) => {

  function switchEntryWithLang(cite, lang) {
    const ignoreSuffix = (lang === `ja`) ? `_E` : `_J`
    return []
  }

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



  return citations.map((c) =>
  <div key={c.id}>
    <div>{c.title}</div>
    <div>
      {c.author
        .map((a) => <span key={a.family}>{a.family} {a.given}</span>)
        .reduce((prev, curr) => [prev, ', ', curr])}
    </div>
  </div>
  )
}

export default Citation