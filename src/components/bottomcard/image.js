import React from "react";

function CardOne(props) {
  const divStyle = {
    backgroundImage: `url(${props.src})`
  };
  return (
    <>
      <div id="Cards1">
        <div class="flip-card-inner">
          <div class="product-image1" style={divStyle}></div>
        </div>
      </div>
    </>
  );
}

export default CardOne;
