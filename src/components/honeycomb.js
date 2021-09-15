import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Honeycomb = ({ children }) => {
  return (
    <StaticImage
      src="../images/honeycomb.jpg"
      alt="honeycomb"
      placeholder="blurred"
      margin='0'
      layout="fullWidth"
    />
  );
};
export default Honeycomb;
