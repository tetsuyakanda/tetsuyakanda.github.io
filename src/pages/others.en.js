import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import propTypes from "../components/defaultPropTypes";

import StudentMDX from "../data/others/student.en.mdx";
import HobbyMDX from "../data/others/hobby.en.mdx";

const ServicePage = ({ location }) => (
  <Layout location={location}>
    <SEO title="MISC" />
    <h1>MISC</h1>
    <StudentMDX />
    <HobbyMDX />
  </Layout>
);

ServicePage.propTypes = propTypes;

export default ServicePage;
