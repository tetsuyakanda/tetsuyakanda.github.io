import React from "react"

import Layout from "../components/layout"
import MyImage from "../components/image"
import SEO from "../components/seo"

import propTypes from "../components/defaultPropTypes"

import IndexMDX from "../data/index.mdx"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h1>KANDA, Tetsuya</h1>
    <p>Assistant Professor<br />
    <a href="http://sel.ist.osaka-u.ac.jp/">Software Engineering Laboratory</a>,<br />
    Department of Computer Science, Graduate School of Information Science and Technology,<br />
    Osaka University, Japan</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <MyImage />
    </div>
    <IndexMDX />
  </Layout>
)

IndexPage.propTypes = propTypes;

export default IndexPage
