import React from "react";
import Topleftimgdiv from "../topleftimgdiv/index";
import Topleftcontactdiv from "../topleftcontactdiv/index";
import Topbottom from "../border/top_bottom";
function topleftdiv() {
  return (
    <>
      <div id="topleftdiv">
      <div id="topleftimg" >
          <div class="circles">
            <div class="rot">
              <div class="rot-wrap">
                <div class="face-b">
                  <div class="wrapper">
                    <div class="eye" id="eye"></div>
                  </div>
                  <div class="wrapper2">
                    <div class="eye2" id="eye2"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rot2">
              <div class="face2">
                <div class="wrapper3">
                  <div class="eye3" id="eye3"></div>
                </div>
                <div class="wrapper4">
                  <div class="eye4" id="eye4"></div>
                </div>
              </div>
            </div>
          </div>
      </div >
        <Topleftcontactdiv></Topleftcontactdiv>
      </div>
    </>
  );
}

export default topleftdiv;
