import React from "react";

import Layout from "../components/layout";
import MyImage from "../components/image";
import Email from "../components/email";
import SNS from "../components/sns";
import SEO from "../components/seo";
import Pronunciation from "../components/pronunciation";
import A from "../components/A";

import propTypes from "../components/defaultPropTypes";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <h1>KANDA Tetsuya</h1>
    <Pronunciation />
    <p>
      Associate Professor
      <br />
      Department of Information and Data Science, Faculty of Information and Data Science,
      <br />
      Notre Dame Seishin University, Japan
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
  return <SEO title="Home" />;
}

export default IndexPage;
