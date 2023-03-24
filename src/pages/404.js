import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = (props) => (
  <Layout location={props.location}>
    <h1>NOT FOUND</h1>
  </Layout>
);

export function Head() {
  return <SEO title="404: Not found" />;
}

export default NotFoundPage;
