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
              <div id="imgandtext">
                <div id="frontimgdiv">
                  <img src={props.src} id="frontcardimg"></img>
                </div>
                <div id="fronttext">
                  <h5>
                    Без глютена, яиц, молока животных жиров, мёда, красителей,
                    конс
                  </h5>
                </div>
              </div>
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
                  height="70px"
                  width="50px"
                ></img>
              </div>
            </div>
            <div>
              <img
                src={BackImage1}
                id="backimage1"
                height="25px"
                width="45px"
              ></img>
            </div>
            <div id="bd">
              <img
                src={backImg}
                id="backbottomimg"
                height="10px"
                width="50%"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
