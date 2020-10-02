import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutMDX from "../data/about.ja.mdx"

const AboutPage = (props) => (
  <Layout location={props.location}>
    <SEO title="About" />
    <AboutMDX />
  </Layout>
)

export default AboutPage
