import React from "react"
import { Link } from "gatsby"

import { FormattedMessage } from 'react-intl'

const ListLink = ({ menu, langKey }) => {
  return menu.map(item => {
    const slug = `/${langKey}${item.slug}`
    return(
      <FormattedMessage key={item.label} id={item.label}>
        {(label) =>
          <Link to={slug}>{label}</Link>
        }
      </FormattedMessage>
    )
  });
}

export default ListLink