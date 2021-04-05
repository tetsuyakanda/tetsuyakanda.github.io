import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import propTypes from "../components/defaultPropTypes";

import ServiceMDX from "../data/activity/service.ja.mdx";
import AwardsMDX from "../data/activity/awards.ja.mdx";
import ToolsMDX from "../data/activity/tools.ja.mdx";
import VisitMDX from "../data/activity/visit.ja.mdx";

const ServicePage = ({ location }) => (
  <Layout location={location}>
    <SEO title="各種活動" lang="ja" />
    <h1>かつどう：各種活動</h1>
    <ServiceMDX />
    <AwardsMDX />
    <ToolsMDX />
    <VisitMDX />
  </Layout>
);

ServicePage.propTypes = propTypes;

export default ServicePage;
