import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import propTypes from "../components/defaultPropTypes";

import LectureMDX from "../data/lecture.ja.mdx";

const LecturePage = ({ location }) => (
  <Layout location={location}>
    <LectureMDX />
  </Layout>
);

LecturePage.propTypes = propTypes;

export function Head() {
  return <SEO title="担当講義" lang="ja" />;
}

export default LecturePage;
