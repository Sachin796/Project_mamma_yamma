import React from "react";
import SvgComponent from "../svg_jsx/image2.jsx";

function Circle(props) {
  return (
    <div className={props.className} id={props.id}>
      <img src={props.src} className="imgcircle" id="circleindex"></img>
      {/* <SvgComponent></SvgComponent> */}
    </div>
  );
}

export default Circle;
