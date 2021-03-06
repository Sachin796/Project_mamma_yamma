import React from "react";
import Topdiv from "../components/topdiv/index";
import Topdiv2 from "../components/topdiv/index2";
import Bottomdiv from "../components/bottomdiv/index";
import LeftRightBorder from "../components/border/left_right";
import RBorder from "../components/border/rightborder";
import LeftBorder from "../components/images/border/border2_left.png";
import RightBorder from "../components/images/border/border2_right.png";

function Mainpage() {
  return (
    <>
      {/* <div class="box" id="box"> */}
      {/* <canvas id="canvas"></canvas> */}
      <div id="rootdiv">
        <div className="lrroot">
          <LeftRightBorder src={LeftBorder}></LeftRightBorder>
        </div>
        <div id="maindiv">
          <Topdiv></Topdiv>
          <Bottomdiv></Bottomdiv>
        </div>
        <div className="lrroot">
          <RBorder src={RightBorder}></RBorder>
        </div>
      </div>
      {/* </div> */}
      {/* </canvas> */}
    </>
  );
}

export default Mainpage;
