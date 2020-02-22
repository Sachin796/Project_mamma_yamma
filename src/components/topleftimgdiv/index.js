import React from "react";
import Circle from "../circle/index";
import CircleRight from "../circle/circletopright";
import logo from "./image1.jpg";
import logo1 from "../images/topleft_noeyes.png";
function topimage() {
  return (
    <>
      <div id="topleftimg">
        <Circle className="circletopleft" src={logo1}></Circle>
        <CircleRight className="circletopright" src={logo}></CircleRight>
      </div>
    </>
  );
}

export default topimage;
