import React from "react";
import Circle from "../circle/index";
import CircleRight from "../circle/circletopright";
import logo from "./image1.jpg";
function topimage() {
  return (
    <>
      <div id="topleftimg">
        <Circle className="circletopleft"></Circle>
        <CircleRight className="circletopright" src={logo}></CircleRight>
      </div>
    </>
  );
}

export default topimage;
