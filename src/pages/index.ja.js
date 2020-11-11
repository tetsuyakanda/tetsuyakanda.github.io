import React from "react"

import Layout from "../components/layout"
import MyImage from "../components/image"
import SEO from "../components/seo"

import IndexMDX from "../data/index.ja.mdx"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO title="ホーム" />
    <h1>神田 哲也</h1>
    <p>助教<br />
    大阪大学　大学院情報科学研究科　コンピュータサイエンス専攻　<a href="http://sel.ist.osaka-u.ac.jp/">ソフトウェア工学講座</a></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <MyImage />
    </div>
    <IndexMDX />
  </Layout>
)

export default IndexPage
