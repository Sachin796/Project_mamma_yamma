import React from "react";
import Image from "../images/backpageicon.png";
import BackImage1 from "../images/backtext.png";
import backImg from "../images/back.png";
function Card(props) {
  const divStyle = {
    backgroundImage: `url(${props.src})`
    // backgroundSize: 'cover'
  };
  const divStyle2 = {
    backgroundImage: `url(${Image})`
    // backgroundSize: 'cover'
  };
  return (
    <>
      <div id="Cards">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="image-card-wrapper">
                <div class="product-image" style={divStyle}></div>
              </div>
              <p>
                Без глютена, яиц, молока, животных жиров, мёда, красителей,
                консерантов, стабилизаторов{" "}
              </p>
            </div>
            <div class="flip-card-back">
              <div class="image-card-wrapper">
                <div class="product-image" style={divStyle2}></div>
                <p>
                  Без глютена, яиц, молока, животных жиров, мёда, красителей,
                  консерантов, стабилизаторов <br></br>
                  <br></br>яиц, молока, животных жиров
                </p>
              </div>
              <p>Без глютена</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
