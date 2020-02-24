import React from "react";

function LeftRight(props) {
  return (
    <>
      <div id="left_right_border">
        <img src={props.src} id="leftrightimg"></img>
        {/* <img id="leftrightimg"></img> */}
      </div>
    </>
  );
}

export default LeftRight;
