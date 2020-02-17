import React from "react";
import SvgComponent from "../svg_jsx/image2.jsx";

function Circle(props) {
  return (
    <div className={props.className}>
      <img src={props.src} className="imgcircle"></img>
      {/* <SvgComponent></SvgComponent> */}
    </div>
  );
}

export default Circle;
