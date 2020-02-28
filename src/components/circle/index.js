import React from "react";
import SvgComponent from "../svg_jsx/image2.jsx";
// import Lefteb from "../images/ebleft.png";
// import Righteb from "../images/ebright.png";

function Circle(props) {
  return (
    <>
      <div class="rot">
        <div class="rot-wrap">
          <div class="face">
            <div class="wrapper">
              <div class="eye" id="eye"></div>
            </div>
            <div class="wrapper2">
              <div class="eye2" id="eye2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Circle;
