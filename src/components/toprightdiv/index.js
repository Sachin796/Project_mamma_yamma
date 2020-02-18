import React from "react";
import Circle from "../navigation/index";
import ImageBorder from "../images/circular_around_top_righ_div.png";
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

      {/* <img
        src={ImageBorder}
        id="toprightborder"
        height="600px"
        width="700px"
      ></img> */}
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
