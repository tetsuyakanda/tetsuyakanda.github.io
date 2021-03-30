import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import propTypes from "../components/defaultPropTypes"

import LectureMDX from "../data/lecture.en.mdx"

const LecturePage = ({location}) => (
  <Layout location={location}>
    <SEO title="Teaching" />
    <LectureMDX />
  </Layout>
)

LecturePage.propTypes = propTypes;

export default LecturePage
