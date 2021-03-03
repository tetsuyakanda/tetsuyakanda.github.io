import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import propTypes from "../components/defaultPropTypes"

import ServiceMDX from "../data/service.en.mdx"

const ServicePage = ({location}) => (
  <Layout location={location}>
    <SEO title="Service" />
    <ServiceMDX />
  </Layout>
)

ServicePage.propTypes = propTypes;

export default ServicePage
