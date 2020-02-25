import React from "react";
import Topdiv from "../components/topdiv/index";
import Bottomdiv from "../components/bottomdiv/index";
import LeftRightBorder from "../components/border/left_right";
import LRBorder from "../components/border/leftrightborder";
import LeftBorder from "../components/images/border/border2_left.png";
import RightBorder from "../components/images/border/border2_right.png";

function Mainpage() {
  return (
    <>
      <div id="rootdiv">
        <span className="lrroot">
          <LeftRightBorder src={LeftBorder}></LeftRightBorder>
        </span>
        <div id="maindiv">
          <Topdiv></Topdiv>
          <Bottomdiv></Bottomdiv>
        </div>
        <div className="lrroot">
          <LRBorder src={RightBorder}></LRBorder>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
