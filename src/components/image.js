import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const MyImage = () => {
  return (
    <StaticImage
      src="../images/abc.jpg"
      alt="KANDA Tetsuya photo"
      placeholder="blurred"
      layout="fixed"
      width={275}
    />
  );
};

export default MyImage;
