import React from "react";
import LeftRightBorder from "../border/leftrightborder";
import Rightborder from "../border/rightborder";
import Text from "../images/infopagetext.png";
import Backimg from "../images/infopageimg1.png";
import LeftBorder from "../images/border/infopage_left.png";
import RightBorder from "../images/border/infopage_right.png";
import TopBottomBorder from "../topbottomborder/index";
import BottomBorder from "../border/bottomborder";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function InfoPage() {
  return (
    <>
      <TopBottomBorder></TopBottomBorder>
      <div id="rootdiv1">
        <div className="lrroot">
          <LeftRightBorder src={LeftBorder}></LeftRightBorder>
        </div>
        <div id="middiv">
          <section id="backimgsection">
            <img src={Backimg} id="backimg"></img>
          </section>
          <section id="backtextsection">
            <img src={Text} id="backtext"></img>
          </section>
        </div>
        <div className="lrroot">
          <Rightborder src={RightBorder}></Rightborder>
        </div>
      </div>
      <BottomBorder></BottomBorder>
    </>
  );
}

export default InfoPage;
