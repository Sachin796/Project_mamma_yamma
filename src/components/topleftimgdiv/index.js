import React from "react";
import Circle from "../circle/index";
import CircleRight from "../circle/circletopright";
import logo from "../../pages/mm.jpg";
function topimage() {
  return (
    <>
      <div id="topleftimg">
        <Circle className="circletopleft" src={logo}></Circle>
        <CircleRight className="circletopright"></CircleRight>
      </div>
    </>
  );
}

export default topimage;
