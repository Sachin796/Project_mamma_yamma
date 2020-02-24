import React from "react";
import Circle from "../navigation/index";
import ImageBorder from "../images/circular_around_top_righ_div.png";
import toprightimage from "../images/topright.png";
import Topbottom from "../../components/border/top_bottom";

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
      <div id="toprightdiv">
        <img
          src={toprightimage}
          height="382px"
          width="700px"
          className="imgcircle"
        ></img>
      </div>

      {/* </Circle> */}
    </>
  );
}

export default toprightdiv;
