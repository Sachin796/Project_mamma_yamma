import React from "react";
import Topleftimgdiv from "../topleftimgdiv/index";
import Topleftcontactdiv from "../topleftcontactdiv/index";
import Topbottom from "../../components/border/top_bottom";
function topleftdiv() {
  return (
    <>
      <div id="topleftdiv">
        <div id="topbottom">
          <Topbottom></Topbottom>
          <Topbottom></Topbottom>
          <Topbottom></Topbottom>
        </div>

        <Topleftimgdiv></Topleftimgdiv>
        <Topleftcontactdiv></Topleftcontactdiv>
      </div>
    </>
  );
}

export default topleftdiv;
