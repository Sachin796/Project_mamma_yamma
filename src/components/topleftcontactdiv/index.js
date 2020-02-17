import React from "react";
import button from "../images/button.png";
import textData from "../images/address.png";
import socialicons from "../images/socialmedia.png";
import contactNumber from "../images/contactnumber.png";

function topleftcontact() {
  return (
    <>
      <div id="topleftcontactdiv">
        <div>
          <img
            src={contactNumber}
            id="contact"
            height="40px"
            width="180px"
          ></img>
          <div id="addressbtndiv">
            <div id="btndiv">
              <img
                src={button}
                id="buttonaddress"
                height="50px"
                width="150px"
              ></img>
            </div>
            <div id="textdiv">
              <img src={textData} height="50px" width="80%"></img>
            </div>
          </div>
        </div>
        {/* <div id="social_icons">
          <img src={socialicons} id="socialicons"></img>
        </div> */}
      </div>
    </>
  );
}

export default topleftcontact;
