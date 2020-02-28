import React from "react";
import button from "../images/button.png";
import textData from "../images/address.png";
import socialicons from "../images/socialmedia.png";
import instagram from "../images/Instagram.png";
import Instanew from "../images/inst_black.png";
import FacebookNew from "../images/facebook_white.png";
import facebook from "../images/Facebook.png";
import contactNumber from "../images/contactnumber.png";

// const update = () => {
//   var divfb = document.getElementById("facebook").style;
//   var divinsta = document.getElementById("instagram").style;

//   if (divfb.backgroundColor === "#FEBB00") {
//     console.log("hello")
//     divfb.cssText = "background-color:black";
//     divfb.backgroundImage = `url(${FacebookNew})`;
//     divinsta.cssText = "background-color:#FEBB00";
//     divinsta.backgroundImage = `url(${Instanew})`;
//   } else {
//     console.log("hello")
//     divfb.cssText = "background-color:#FEBB00";
//     divinsta.cssText = "background-color:black";
//   }
// };

function topleftcontact() {
  return (
    <>
      <div id="topleftcontactdiv">
        <div id="belowtopleftcontactdiv">
          <div class="contact-wrapper">
          <div id="contactnumberdiv">
            {/* <img
              src={contactNumber}
              id="contact"
              height="40px"
              width="180px"
            ></img> */}
            <h2 id="contact"> +7(986) 784-95-43</h2>
            <div id="textdiv1" class="sidetextdiv"></div>
          </div>

          <div id="addressbtndiv">
            <div id="btndiv" onClick={() =>{ window.location.pathname = "/about"; }}>
              <p>подробнее</p>
            </div>
            <div id="textdiv" class="belowtext">
              {/* <img src={textData} id="textimg" height="50px" width="80%"></img> */}
              <p id="textimg">
                Без глютена, яиц, молока, животных жиров,
                мёда,красителей,<br></br>консерантов,стабилизаторов и усилителей вкуса.
                <br></br>&#174; Mommy Yummy / 2020-Москва
              </p>
            </div>
          </div>
        </div>
        </div>
        <div id="social_icons">
          <a href="https://facebook.com"><div
            id="facebook" class="faceb"
            style={{ backgroundColor: "#FEBB00" }}>
          </div></a>
          <a href="https://instagram.com"><div
            id="instagram" class="instg"
            style={{ backgroundColor: "black" }}>
          </div></a>
        </div>
      </div>
    </>
  );
}

export default topleftcontact;
