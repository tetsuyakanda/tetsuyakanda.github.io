import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Citation from "../citation"

import propTypes from "../components/defaultPropTypes"

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO title="Cite" />
    <h1>Cite</h1>
    <Citation />
  </Layout>
)

IndexPage.propTypes = propTypes;

export default IndexPage
