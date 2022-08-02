import React from "react";
import { FormattedMessage } from "react-intl";

import Conference from "./conference";
import Journal from "./journal";
import Poster from "./poster";

const Contents = ({ cite, lang }) => {
  if (!cite.issued.date_parts[0][1]) {
    return (
      <span>
        {cite.container_title} (<FormattedMessage id="toAppear" />)
      </span>
    );
  } else
    switch (cite.genre) {
      case `conf`:
      case `j_conf`:
      case `tech`:
        return <Conference cite={cite} />;
      case `journal`:
        return <Journal cite={cite} />;
      case `poster`:
        return <Poster cite={cite} lang={lang} />;
      default:
        return <span>{cite.genre} still undef.</span>;
    }
};

export default Contents;
