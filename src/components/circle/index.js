import React from "react";
import SvgComponent from "../svg_jsx/image2.jsx";
// import Lefteb from "../images/ebleft.png";
// import Righteb from "../images/ebright.png";

function Circle(props) {
  return (
    <>
      <div className={props.className}>
        <img src={props.src} className="imgcircle"></img>
        <div id="lefteb" className="leftebclass"></div>
        <div id="righteb" className="rightebclass"></div>
        {/* <SvgComponent></SvgComponent> */}
      </div>
    </>
  );
}

export default Circle;
