import React from "react";
import SvgComponent from "../svg_jsx/image2.jsx";
// import Lefteb from "../images/ebleft.png";
// import Righteb from "../images/ebright.png";

function Circle(props) {
  return (
    <>
      <div class="face">
        <div class="wrapper">
          <div class="eyeleft" id="eye"></div>
        </div>
        <div className="wrapper1">
          <div class="eyeright" id="eye"></div>
        </div>
      </div>
    </>
  );
}

export default Circle;
