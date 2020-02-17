import React from "react";
import Card from "../bottomcard/frontCard.js";
import image1 from "../images/bottom_img_1.png";
import image2 from "../images/bottom_img_2.png";
import image3 from "../images/bottom_img_3.png";
import image4 from "../images/bottom_img_4.png";
import image5 from "../images/bottom_img_5.png";
import image6 from "../images/bottom_img_6.png";

function bottomdiv() {
  return (
    <>
      <div id="cardDiv" className="col l4 m8 s12">
        <Card src={image1} id="imgcircle"></Card>
        <Card src={image2} id="imgcircle"></Card>
        <Card src={image3} id="imgcircle"></Card>
        <Card src={image4} id="imgcircle"></Card>
        <Card src={image5} id="imgcircle"></Card>
        <Card src={image6} id="imgcircle"></Card>
      </div>
    </>
  );
}

export default bottomdiv;
