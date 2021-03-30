import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import propTypes from "../components/defaultPropTypes"

import ServiceMDX from "../data/activity/service.ja.mdx"
import AwardsMDX from "../data/activity/awards.ja.mdx"

const ServicePage = ({location}) => (
  <Layout location={location}>
    <SEO title="Service" />
    <ServiceMDX />
    <AwardsMDX />
  </Layout>
)

ServicePage.propTypes = propTypes;

export default ServicePage
