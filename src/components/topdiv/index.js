import React from "react";
import Topleft from "../topleftdiv/index";
import Topright from "../toprightdiv/index";
import Topbottom from "../../components/border/top_bottom";
import Img from "../images/border/border1.png";
import TopBottomBorder from "../topbottomborder/index";

function topdiv() {
  return (
    <>
      <div id="topborderdiv">
        <TopBottomBorder></TopBottomBorder>
      </div>
      <div id="topflex">
        <Topleft></Topleft>
        <Topright></Topright>
      </div>
    </>
  );
}

export default topdiv;
