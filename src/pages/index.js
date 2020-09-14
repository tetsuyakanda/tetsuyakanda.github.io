import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MyImage from "../components/image"
import SEO from "../components/seo"

import IndexMDX from "../data/index.mdx"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <h1>KANDA, Tetsuya</h1>
    <p>is .</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <MyImage />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <IndexMDX />
  </Layout>
)

export default IndexPage
