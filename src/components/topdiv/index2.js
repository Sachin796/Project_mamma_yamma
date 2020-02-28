import React from "react";
import Topleft from "../topleftdiv/index";
import Topleft2 from "../topleftdiv/index2";
import Topright from "../toprightdiv/index";
import Topbottom from "../../components/border/top_bottom";
import Img from "../images/border/border1.png";
import TopBottomBorder from "../topbottomborder/index";
import { red } from "color-name";

function topdiv() {
  return (
    <>
      <div id="topborderdiv">
        <TopBottomBorder></TopBottomBorder>
      </div>
      <div id="topflex" style={{backgroundColor: "#f0f0f0"}}>
        <Topleft2></Topleft2>
        <Topright></Topright>
      </div>
    </>
  );
}

export default topdiv;
