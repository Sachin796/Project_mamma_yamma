import React from "react";
import Topleftimgdiv from "../topleftimgdiv/index";
import LeftRightBorder from "../border/left_right";
import Topdiv from "../topdiv/index";
import Bottomdiv from "../bottomdiv/index";
import Text from "../images/infopagetext.png";
import Backimg from "../images/infopageimg1.png";
import LeftBorder from "../images/border/border2_left.png";
import RightBorder from "../images/border/border2_right.png";
import Topleftcontactdiv from "../topleftcontactdiv/index";
import TopBottomBorder from "../topbottomborder/index";
function InfoPage() {
  return (
    <>
      <TopBottomBorder></TopBottomBorder>
      <div id="rootdiv1">
        <div className="lrroot">
          <LeftRightBorder src={LeftBorder}></LeftRightBorder>
        </div>
        <div id="middiv">
          <section id="backimgsection">
            <img src={Backimg} id="backimg"></img>
          </section>
          <section id="backtextsection">
            <img src={Text} id="backtext"></img>
          </section>
        </div>
        <div className="lrroot">
          <LeftRightBorder src={RightBorder}></LeftRightBorder>
        </div>
      </div>
      <TopBottomBorder></TopBottomBorder>
    </>
  );
}

export default InfoPage;
