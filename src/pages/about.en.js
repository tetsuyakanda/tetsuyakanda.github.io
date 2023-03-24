import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import propTypes from "../components/defaultPropTypes";

import AboutMDX from "../data/about.mdx";

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <AboutMDX />
  </Layout>
);

AboutPage.propTypes = propTypes;

export function Head() {
  return <SEO title="About" />;
}

export default AboutPage;
