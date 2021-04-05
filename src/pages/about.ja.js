import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import propTypes from "../components/defaultPropTypes";

import AboutMDX from "../data/about.ja.mdx";

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="About" lang="ja" />
    <AboutMDX />
  </Layout>
);

AboutPage.propTypes = propTypes;

export default AboutPage;
