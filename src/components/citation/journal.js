import React from "react";

const Journal = ({ cite }) => {
  return (
    <span>
      {cite.container_title}, vol.{cite.volume}, no.{cite.issue}, pp.{cite.page}
    </span>
  );
};

export default Journal;
