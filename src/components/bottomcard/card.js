import React from "react";

function CardOne(props) {
  const divStyle = {
    backgroundImage: `url(${props.src})`,
    backgroundSize: "cover"
  };
  return (
    <>
      <div id="Cards1">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="image-card-wrapper">
                <div class="product-image" style={divStyle}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardOne;
