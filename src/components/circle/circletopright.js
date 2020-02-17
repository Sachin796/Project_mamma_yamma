import React from "react";
import image from "./";
function Circle(props) {
  return (
    <div className={props.className} id={props.id}>
      <img src={props.src} className="imgcircle" id="circletopright"></img>
    </div>
  );
}

export default Circle;
