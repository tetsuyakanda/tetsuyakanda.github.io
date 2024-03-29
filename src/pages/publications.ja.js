import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Citation from "../components/citation";

import propTypes from "../components/defaultPropTypes";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <h1>ろんぶん：業績一覧</h1>
    <Citation lang="ja" />
  </Layout>
);

IndexPage.propTypes = propTypes;

export function Head() {
  return <SEO title="業績一覧" lang="ja" />;
}

export default IndexPage;
