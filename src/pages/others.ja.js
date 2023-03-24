import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import propTypes from "../components/defaultPropTypes";

import StudentMDX from "../data/others/student.ja.mdx";
//import HobbyMDX from "../data/others/hobby.ja.mdx";

const ServicePage = ({ location }) => (
  <Layout location={location}>
    <h1>そのほか</h1>
    <StudentMDX />
  </Layout>
);

ServicePage.propTypes = propTypes;

export function Head() {
  return <SEO title="その他" lang="ja" />;
}

export default ServicePage;
