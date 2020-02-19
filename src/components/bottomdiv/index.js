import React from "react";
import Card from "../bottomcard/frontCard.js";
import image1 from "../images/bottom_img_1.png";
import image2 from "../images/bottom_img_2.png";
import image3 from "../images/bottom_img_3.png";
import image4 from "../images/bottom_img_4.png";
import image5 from "../images/bottom_img_5.png";
import image6 from "../images/bottom_img_6.png";
import Topbottom from "../../components/border/top_bottom";
function bottomdiv() {
  return (
    <>
      <div id="cardDiv">
        <Card src={image1} className="imgcircle"></Card>
        <Card src={image2} className="imgcircle"></Card>
        <Card src={image3} className="imgcircle"></Card>
        <Card src={image4} className="imgcircle"></Card>
        <Card src={image5} className="imgcircle"></Card>
        <Card src={image6} className="imgcircle"></Card>
        <div id="topbottom">
          <Topbottom></Topbottom>
          <Topbottom></Topbottom>
          <Topbottom></Topbottom>
          <Topbottom></Topbottom>
          <Topbottom></Topbottom>
          <Topbottom></Topbottom>
          <Topbottom></Topbottom>
          <Topbottom></Topbottom>
          <Topbottom></Topbottom>
          <Topbottom></Topbottom>
          <Topbottom></Topbottom>
          <Topbottom></Topbottom>
        </div>
      </div>
    </>
  );
}

export default bottomdiv;
