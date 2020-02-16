import React from "react";
import Circle from "../navigation/index";
function toprightdiv() {
  const vertices = [
    [0, 316],
    [742, 316, 0, 1, 1, 1484, 316],
    [742, 316, 0, 1, 1, 0, 316],
    [0, 316],
    [742, 316, 0, 1, 1, 1484, 316],
    [742, 316, 0, 1, 1, 0, 316]
  ];
  return (
    <>
      <Circle vertice={vertices} className="circle" id="toprightdiv"></Circle>
    </>
  );
}

export default toprightdiv;
