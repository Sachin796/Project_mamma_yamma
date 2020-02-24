import React from "react";
import button from "../images/button.png";
import textData from "../images/address.png";
import socialicons from "../images/socialmedia.png";
import instagram from "../images/Instagram.png";
import Instanew from "../images/inst_black.png";
import FacebookNew from "../images/facebook_white.png";
import facebook from "../images/Facebook.png";
import contactNumber from "../images/contactnumber.png";

const update = () => {
  var divfb = document.getElementById("facebook").style;
  var divinsta = document.getElementById("instagram").style;
  var instaimg = document.getElementById("instagramimg");
  var facebookimg = document.getElementById("facebookimg");

  console.log(Instanew.toString());
  console.log(facebookimg.src);

  if (divfb.backgroundColor === "white") {
    divfb.cssText = "background-color:black";
    facebookimg.cssText = "background-color:white";
    instaimg.src = Instanew.toString();
    facebookimg.src = FacebookNew.toString();
  } else {
    divfb.cssText = "background-color:white";
    instaimg.src = instagram.toString();
    facebookimg.src = facebook.toString();
  }

  if (divinsta.backgroundColor === "black") {
    divinsta.cssText = "background-color:white";
  } else {
    divinsta.cssText = "background-color:black";
  }
};

const changePage = () => {
  window.location.pathname = "/about";
};

function topleftcontact() {
  return (
    <>
      <div id="topleftcontactdiv">
        <div id="belowtopleftcontactdiv">
          <div id="contactnumberdiv">
            <img
              src={contactNumber}
              id="contact"
              height="40px"
              width="180px"
            ></img>
            <div id="textdiv1" class="sidetextdiv">
              <img src={textData} id="textimg" height="50px" width="80%"></img>
            </div>
          </div>

          <div id="addressbtndiv">
            <div id="btndiv">
              <img
                src={button}
                id="buttonaddress"
                height="50px"
                width="150px"
                onClick={changePage}
              ></img>
            </div>
            <div id="textdiv" class="belowtext">
              <img src={textData} id="textimg" height="50px" width="80%"></img>
            </div>
          </div>
        </div>
        <div id="social_icons">
          <div
            id="facebook"
            style={{ backgroundColor: "white" }}
            onClick={update}
          >
            <img src={facebook} id="facebookimg"></img>
          </div>
          <div
            id="instagram"
            style={{ backgroundColor: "black" }}
            onClick={update}
          >
            <img src={instagram} id="instagramimg"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default topleftcontact;
