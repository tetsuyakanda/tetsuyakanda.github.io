import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const KanjiImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "kanji.png" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <div style={{ maxWidth: `128px`, marginBottom: `1.45rem` }}>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  </div>
  )
}

export default KanjiImage
