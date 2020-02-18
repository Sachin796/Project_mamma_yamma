import React from "react";
import Image from "../images/backpageicon.png";
import BackImage1 from "../images/backtext.png";
import backImg from "../images/back.png";
function Card(props) {
  return (
    <>
      <div id="Cards">
        <div id="section1">
          <div id="frontpart">
            <div id="cardimg" className="circleBottom">
              <img src={props.src} id={props.id}></img>
            </div>
            {/* <div id="cardTextContent">
              "Cupcake ipsum dolor sit. Amet I love liquorice jujubes pudding
              croissant
            </div> */}
          </div>
          <div id="backpart">
            <div id="backimgdiv">
              <div id="backimgdata">
                <img
                  src={Image}
                  id="backimage"
                  height="80px"
                  width="60px"
                ></img>
              </div>
            </div>
            <div>
              <img
                src={BackImage1}
                id="backimage1"
                height="50px"
                width="50px"
              ></img>
            </div>
            <div id="bd">
              <img
                src={backImg}
                id="backbottomimg"
                height="30px"
                width="100%"
              ></img>
            </div>
            {/* <div id="cardimg"> */}
            {/* <p id="backimgdiv">hello<img src={Image}></img></p> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
