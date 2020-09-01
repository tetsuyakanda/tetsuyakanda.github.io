import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import IndexMDX from "../data/index.mdx"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>KANDA, Tetsuya</h1>
    <p>is .</p>
    
      <Image />

    <Link to="/page-2/">Go to page 2</Link> <br />
    <IndexMDX />
  </Layout>
)

export default IndexPage
