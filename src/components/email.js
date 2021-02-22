import React from "react"
import { FormattedMessage } from "react-intl";

import EmailMDX from "../data/email.mdx"

const Email = () => {
  return (
  <section>
    <h2>
      <FormattedMessage id="contact" />
    </h2>
    <h3>e-mail</h3>
    <EmailMDX />
  </section>)
}

export default Email