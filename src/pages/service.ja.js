import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import propTypes from "../components/defaultPropTypes"

import ServiceMDX from "../data/service.ja.mdx"

const ServicePage = ({location}) => (
  <Layout location={location}>
    <SEO title="Home" />
    <ServiceMDX />
  </Layout>
)

ServicePage.propTypes = propTypes;

export default ServicePage
