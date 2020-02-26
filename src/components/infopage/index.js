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
            <div id="backtext">
              {/* <div id="text1">This is div test1</div>
              <div id="text2">This is div test2</div>
              <div id="text3">This is div test3</div> */}
              <Row>
                <Col xl={8} id="text1">
                  <h5>
                    Привет, Меня зовут Камила и я давно придерживаюсь принципов
                    здо
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col id="text2">
                  <h5>
                    Привет, Меня зовут Камила и я давно придерживаюсь принципов
                    здо Привет, Меня зовут Камила и я давно придерживаюсь
                    принципов здо Привет, Меня зовут Камила и я давно
                    придерживаюсь принципов здо Привет, Меня зовут Камила и я
                    давно придерживаюсь принципов здо
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col id="text3">
                  <h5>
                    Привет, Меня зовут Камила и я давно придерживаюсь принципов
                    здо Привет, Меня зовут Камила и я давно придерживаюсь
                    принципов здо Привет, Меня зовут Камила и я давно
                    придерживаюсь принципов здо Привет, Меня зовут Камила и я
                    давно придерживаюсь принципов здо
                  </h5>{" "}
                </Col>
              </Row>
              <Container></Container>
            </div>
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
