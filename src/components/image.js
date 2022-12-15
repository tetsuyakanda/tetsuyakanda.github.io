import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const MyImage = () => {
  return (
    <StaticImage
      src="../images/ist.jpg"
      alt="KANDA Tetsuya photo"
      placeholder="blurred"
      layout="fixed"
      width={300}
    />
  );
};

export default MyImage;
