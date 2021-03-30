import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl";

import CiteItem from "./citeitem"

const category = [`journal`, `conf`, `j_conf`, `tech`,`poster`]

function group(data) {
  return data.reduce((obj, value) => {
    const key = category.includes(value.genre) ? value.genre : `others`;
    (obj[key] || (obj[key] = [])).push(value);
    return obj;
  }, {})
}

function sort(c1, c2) {
  const c1d = c1.issued.date_parts[0];
  const c2d = c2.issued.date_parts[0];
  return c1d[0] < c2d[0] || c1d[0] == c2d[0] && c1d[1] < c2d[1] || c1d[0] == c2d[0] && c1d[1] == c2d[1] && c1d[2] < c2d[2]
  // to appear は 月がnullなので、nullとの比較で上位に行くようにする
  //return !(c1d[0] > c2d[0] || c1d[0] == c2d[0] && c1d[1] > c2d[1] || c1d[0] == c2d[0] && c1d[1] == c2d[1] && c1d[2] > c2d[2])
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

  const nodes = allCitation.edges.map((c) => c.node)

  const [state, setState] = useState(nodes);

  const switchEntryWithLang = (cite, lang) => {
    const ignoreSuffix = (lang === `ja`) ? `_E` : `_J`;
    return !cite.citation_label.endsWith(ignoreSuffix);
  }

  const handleRadioLang = (event) => {
    const value = event.target.value
    const result = (value === `all`) ? nodes : nodes.filter((c) => c.language === value);
    setState(result)
  }

  const Selector = () => {
    return(
      <div> Language Filter
        <label id="all"><input type="radio" name="lang" value="all" htmlFor="japanese" onChange={handleRadioLang}/>All</label>
        <label id="english"><input type="radio" name="lang" value="English" htmlFor="english" onChange={handleRadioLang} />English</label>
        <label id="japanese"><input type="radio" name="lang" value="Japanese" htmlFor="japanese" onChange={handleRadioLang}/>Japanese</label>
      </div>
    )
  }

  const citations = state.filter((c) => switchEntryWithLang(c, lang)).sort(sort);
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
      <Selector />
      {paperList}
    </div>
  )
}

export default Citation