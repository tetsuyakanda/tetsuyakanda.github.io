import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const MyImage = () => {
  return (
    <StaticImage
      src="../images/me.jpg"
      alt="KANDA Tetsuya photo"
      placeholder="blurred"
      layout="fixed"
      width={150}
    />
  );
};

export default MyImage;
