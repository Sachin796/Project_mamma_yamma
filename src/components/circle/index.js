import React from "react";
import SvgComponent from "../svg_jsx/image2.jsx";
// import Lefteb from "../images/ebleft.png";
// import Righteb from "../images/ebright.png";

function Circle(props) {
  return (
    <>
      <div className={props.className}>
        <div id="lefteb" className="leftebclass"></div>
        <div id="righteb" className="rightebclass"></div>
        <img src={props.src} className="imgcircle"></img>
        {/* <SvgComponent></SvgComponent> */}
      </div>
    </>
  );
}

export default Circle;
