import React from "react";
import Topleft from "../topleftdiv/index";
import Topright from "../toprightdiv/index";

function topdiv() {
  return (
    <>
      <div id="topflex">
        <Topleft></Topleft>
        <Topright></Topright>
      </div>
    </>
  );
}

export default topdiv;
