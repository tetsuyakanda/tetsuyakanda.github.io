import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import propTypes from "../components/defaultPropTypes";

import LectureMDX from "../data/lecture.en.mdx";

const LecturePage = ({ location }) => (
  <Layout location={location}>
    <LectureMDX />
  </Layout>
);

LecturePage.propTypes = propTypes;

export function Head() {
  return <SEO title="Teaching" />;
}

export default LecturePage;
