import React from "react";
import Circle from "../navigation/index";
import toprightimage from "../images/topright.png";

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
      {/* <Circle vertice={vertices} className="circle" id="toprightdiv"> */}
      <img
        src={toprightimage}
        height="400px"
        width="700px"
        className="imgcircle"
        id="toprightdiv"
      ></img>
      {/* </Circle> */}
    </>
  );
}

export default toprightdiv;
