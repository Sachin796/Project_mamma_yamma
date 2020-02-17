import React from "react";
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
            <div id="cardimg" className="circleBottom">
              <img src={props.src} id={props.id}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
