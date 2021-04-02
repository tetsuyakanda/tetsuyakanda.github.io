import React from "react";
import { FormattedMessage } from "react-intl";

import SNSMDX from "../data/sns.mdx";

const SNS = () => {
  return (
    <section>
      <h2>
        <FormattedMessage id="sns" />
      </h2>
      <SNSMDX />
    </section>
  );
};

export default SNS;
