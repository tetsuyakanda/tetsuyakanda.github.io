import React from "react";

import Layout from "../components/layout";
import MyImage from "../components/image";
import Email from "../components/email";
import SNS from "../components/sns";
import SEO from "../components/seo";
import A from "../components/A";

import propTypes from "../components/defaultPropTypes";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <h1>神田 哲也</h1>
    <p>
      准教授
      <br />
      ノートルダム清心女子大学 情報デザイン学部 情報デザイン学科
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <MyImage />
    </div>
    <Email />
    <SNS />
  </Layout>
);

IndexPage.propTypes = propTypes;

export function Head() {
  return <SEO title="ホーム" lang="ja" />;
}

export default IndexPage;
