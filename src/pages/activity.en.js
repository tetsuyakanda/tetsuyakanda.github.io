import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import propTypes from "../components/defaultPropTypes";

import ServiceMDX from "../data/activity/service.en.mdx";
import AwardsMDX from "../data/activity/awards.en.mdx";
import ToolsMDX from "../data/activity/tools.en.mdx";
import VisitMDX from "../data/activity/visit.en.mdx";

const ServicePage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Activity" />
    <h1>Activity</h1>
    <ServiceMDX />
    <AwardsMDX />
    <ToolsMDX />
    <VisitMDX />
  </Layout>
);

ServicePage.propTypes = propTypes;

export default ServicePage;
