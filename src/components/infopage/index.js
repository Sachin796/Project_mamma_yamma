import React from "react";
import LeftRightBorder from "../border/leftrightborder";
import Text from "../images/infopagetext.png";
import Backimg from "../images/infopageimg1.png";
import LeftBorder from "../images/border/infopage_left.png";
import RightBorder from "../images/border/infopage_right.png";
import TopBottomBorder from "../topbottomborder/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function InfoPage() {
  return (
    <>
      {/* <Container>
        <Row>
          <Col md={8} sm={4} xs={2}>
            <div id="left_right_border">
              <img src={props.src} id="leftrightimg1"></img>
            </div>
          </Col>
        </Row>
      </Container> */}
      <TopBottomBorder></TopBottomBorder>
      <div id="rootdiv1">
        {/* <div className="lrroot"> */}
        <LeftRightBorder src={LeftBorder}></LeftRightBorder>
        {/* </div> */}
        <div id="middiv">
          <section id="backimgsection">
            <img src={Backimg} id="backimg"></img>
          </section>
          <section id="backtextsection">
            <img src={Text} id="backtext"></img>
          </section>
        </div>
        <div className="lrroot">
          <LeftRightBorder src={RightBorder}></LeftRightBorder>
        </div>
      </div>
      <TopBottomBorder></TopBottomBorder>
    </>
  );
}

export default InfoPage;
