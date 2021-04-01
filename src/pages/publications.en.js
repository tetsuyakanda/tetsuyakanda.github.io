import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Citation from "../components/citation";

import propTypes from "../components/defaultPropTypes";

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Publications" />
    <h1>Publications</h1>
    <Citation lang="en" />
  </Layout>
);

IndexPage.propTypes = propTypes;

export default IndexPage;
