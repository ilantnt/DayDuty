import React from "react";
import { render } from "node-sass";

export const die = (shit) => {
  console.log("fuck this shit" + shit);
};

const go = () => {
  console.log("ff");
};

const ArrowsShit = function (props) {
  console.log("shittttttt");
  return <h3>{props.stam}</h3>;
};

export default ArrowsShit;
