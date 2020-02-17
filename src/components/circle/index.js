import React from "react";

function Circle(props) {
  return (
    <div className={props.className} id={props.id}>
      <img id="imgcircle"></img>
      {/* <SvgComponent></SvgComponent> */}
    </div>
  );
}

export default Circle;
