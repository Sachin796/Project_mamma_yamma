import React from "react";
import SvgComponent from "../svg_jsx/image2.jsx";

function Circle(props) {
  return (
    <div className={props.className} id={props.id}>
      <img src={props.src} id="imgcircle"></img>
      {/* <SvgComponent></SvgComponent> */}
    </div>
  );
}

export default Circle;
