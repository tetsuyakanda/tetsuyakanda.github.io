import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = (props) => (
  <Layout location={props.location}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
  </Layout>
)

export default NotFoundPage
