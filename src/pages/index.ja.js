import React from "react";

import Layout from "../components/layout";
import MyImage from "../components/image";
import Email from "../components/email";
import SEO from "../components/seo";

import propTypes from "../components/defaultPropTypes";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="ホーム" />
    <h1>神田 哲也</h1>
    <p>
      助教
      <br />
      大阪大学 大学院情報科学研究科 コンピュータサイエンス専攻{" "}
      <a href="http://sel.ist.osaka-u.ac.jp/">ソフトウェア工学講座</a>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <MyImage />
    </div>
    <Email />
  </Layout>
);

IndexPage.propTypes = propTypes;

export default IndexPage;
