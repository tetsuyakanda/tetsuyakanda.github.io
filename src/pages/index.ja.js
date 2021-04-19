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
    <SEO title="ホーム" lang="ja" />
    <h1>神田 哲也</h1>
    <p>
      助教
      <br />
      大阪大学 大学院情報科学研究科 コンピュータサイエンス専攻{" "}
      <A href="http://sel.ist.osaka-u.ac.jp/">ソフトウェア工学講座</A>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <MyImage />
    </div>
    <Email />
    <SNS />
  </Layout>
);

IndexPage.propTypes = propTypes;

export default IndexPage;
