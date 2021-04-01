import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const KanjiImage = () => {
  return (
    <div style={{ maxWidth: `128px`, marginBottom: `1.45rem` }}>
      <StaticImage src="../images/kanji.jpg" alt="KANDA Tetsuya in Kanji" />
    </div>
  );
};

export default KanjiImage;
