import React from "react";
import Card from "../bottomcard/frontCard.js";
import CardOne from "../bottomcard/card.js";
import ImageCard from "../bottomcard/image.js";
import Socialcard from "../bottomcard/socialCard.js";
import image1 from "../images/bottom_img_1.png";
import image2 from "../images/bottom_img_2.png";
import image3 from "../images/bottom_img_3.png";
import image4 from "../images/bottom_img_4.png";
import image5 from "../images/bottom_img_5.png";
import image6 from "../images/bottom_img_6.png";
import image7 from "../images/box-info.png";
import image8 from "../images/responsivesecondlast.png";
import TopBottomBorder from "../topbottomborder/index";
function bottomdiv() {
  return (
    <>
      <div id="cardDiv" className="cardDiv">
        <div id="Cardtop" class="cardi">
          <CardOne src={image7} className="imgcircle"></CardOne>
        </div>
        <div id="Card1" class="cardi">
          <Card src={image1} className="imgcircle"></Card>
        </div>
        <div id="Card2" class="cardi">
          <Card src={image2} className="imgcircle"></Card>
        </div>
        <div id="Card3" class="cardi">
          <Card src={image3} className="imgcircle"></Card>
        </div>
        <div id="Card4" class="cardi">
          <Card src={image4} className="imgcircle"></Card>
        </div>
        <div id="Card5" class="cardi">
          <Card src={image5} className="imgcircle"></Card>
        </div>
        <div id="Card6" class="cardi">
          <Card src={image6} className="imgcircle"></Card>
        </div>

        <div id="Card8" class="cardi">
          <ImageCard src={image8} className="imgcircle"></ImageCard>
        </div>
        <div id="Card7">
          {/* <Socialcard src={image7} className="imgcircle"></Socialcard> */}
          <p id="responsivesocialmedia"></p>
        </div>
        <div id="Card9">
          <p>
            ® Mommy yummy / 2020 – москва. <br></br>made in bekishev studio
          </p>
        </div>
        <div id="Card1" class="cardi">
          <Card src={image1} className="imgcircle"></Card>
        </div>
        <div id="Card2" class="cardi">
          <Card src={image2} className="imgcircle"></Card>
        </div>
        <div id="Card3" class="cardi">
          <Card src={image3} className="imgcircle"></Card>
        </div>
        <div id="Card4" class="cardi">
          <Card src={image4} className="imgcircle"></Card>
        </div>
        <div id="Card5" class="cardi">
          <Card src={image5} className="imgcircle"></Card>
        </div>
        <div id="Card6" class="cardi">
          <Card src={image6} className="imgcircle"></Card>
        </div>
        <div id="Card1" class="cardi">
          <Card src={image1} className="imgcircle"></Card>
        </div>
        <div id="Card2" class="cardi">
          <Card src={image2} className="imgcircle"></Card>
        </div>
        <div id="Card3" class="cardi">
          <Card src={image3} className="imgcircle"></Card>
        </div>
        <div id="Card4" class="cardi">
          <Card src={image4} className="imgcircle"></Card>
        </div>
        <div id="Card5" class="cardi">
          <Card src={image5} className="imgcircle"></Card>
        </div>
        <div id="Card6" class="cardi">
          <Card src={image6} className="imgcircle"></Card>
        </div>
        <div id="Card1" class="cardi">
          <Card src={image1} className="imgcircle"></Card>
        </div>
        <div id="Card2" class="cardi">
          <Card src={image2} className="imgcircle"></Card>
        </div>
        <div id="Card3" class="cardi">
          <Card src={image3} className="imgcircle"></Card>
        </div>
        <div id="Card4" class="cardi">
          <Card src={image4} className="imgcircle"></Card>
        </div>
        <div id="Card5" class="cardi">
          <Card src={image5} className="imgcircle"></Card>
        </div>
        <div id="Card6" class="cardi">
          <Card src={image6} className="imgcircle"></Card>
        </div>
        <div id="Card1" class="cardi">
          <Card src={image1} className="imgcircle"></Card>
        </div>
        <div id="Card2" class="cardi">
          <Card src={image2} className="imgcircle"></Card>
        </div>
        <div id="Card3" class="cardi">
          <Card src={image3} className="imgcircle"></Card>
        </div>
        <div id="Card4" class="cardi">
          <Card src={image4} className="imgcircle"></Card>
        </div>
        <div id="Card5" class="cardi">
          <Card src={image5} className="imgcircle"></Card>
        </div>
        <div id="Card6" class="cardi">
          <Card src={image6} className="imgcircle"></Card>
        </div>
      </div>
      <div id="topbottom1"></div>
    </>
  );
}

export default bottomdiv;
