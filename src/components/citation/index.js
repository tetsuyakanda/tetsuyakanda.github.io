import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl";

import CiteItem from "./citeitem"

const category = [`journal`, `conf`, `tech`,`poster`]

function group(data) {
  return data.reduce((obj, value) => {
    const key = category.includes(value.genre) ? value.genre : `others`;
    (obj[key] || (obj[key] = [])).push(value);
    return obj;
  }, {})
}

// load all citations first, then filter with request

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

  const switchEntryWithLang = (cite, lang) => {
    const ignoreSuffix = (lang === `ja`) ? `_E` : `_J`;
    return !cite.citation_label.endsWith(ignoreSuffix);
  }  

  const citations = allCitation.edges.map((c) => c.node).filter((c) => switchEntryWithLang(c, lang));
  const citationGroups = group(citations);

  const paperList = category.map((type) => {
    const papers = citationGroups[type]
    if (!papers) {
      return null
    } else {
      return (
        <div key={type}>
          <h2><FormattedMessage id={type} /></h2>
          <CiteItem lang={lang} papers={papers} />
        </div>
      )
    }
  })

  return (
    <div>
      {paperList}
    </div>
  )
}

export default Citation