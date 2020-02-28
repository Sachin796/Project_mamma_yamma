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

        <div class="rot-wrap2">
          <div class="rotInfo">
            <div class="face6">
              <div class="wrapper5">
                <div class="eye5" id="eye5"></div>
              </div>
              <div class="wrapper6">
                <div class="eye6" id="eye6"></div>
              </div>
            </div>
          </div>
        </div>

          <section id="backtextsection">
            <div id="backtext">
              {/* <div id="text1">This is div test1</div>
              <div id="text2">This is div test2</div>
              <div id="text3">This is div test3</div> */}
              Привет, Меня зовут Камила и я давно придерживаюсь принципов здорового питания! <br></br><br></br>

А о том,чтобы сделать это делом своей жизни я задумалась после того, как у моего сына в 5 лет диагностировали аутоиммунное  заболевание и мне пришлось с головой погрузиться в вопросы питания и еды.<br></br><br></br> 

Исследуя связь кишечника с мозгом, причины заболеваний  и  влияние определенных продуктов на иммунитет и здоровье в целом, я пришла к выводу, что необходимо заменить непонятные и таинственно замаскированные промышленные ингредиенты на понятную и здоровую альтернативу.<br></br>

<div class="mobile-box">

</div>

<br></br>

Сложнее всего пришлось с поиском полезных, но при этом вкусных сладостей. Тогда то мне и  пришла в голову мысль производить такие сладости самой. <br></br><br></br>                          

 С помощью команды профессионалов мы воплотили мечту в жизнь и  создали бренд Mommy Yummy,который нацелен на возрождение здорового поколения с помощью любимых детских лакомств, но без консервантов, вредных жиров, сахара и глютена.<br></br><br></br>

Мы позаботились также и о взрослых-в нашей линейке  присутствуют кето и протеиновые сладости для мам и пап, с доведенными до совершенства вкусами и максимальной пользой для организма.
              {/* <Container></Container> */}
            </div>
          </section>
          <div class="info-wrap">
          <div class="info-contact">
            <h2 id="contact2"> +7(986) 784-95-43</h2>
            <div class="mobile-social">
              <a>
              <div id="facebook" class="info-fb"></div>
              </a>
              <a>
              <div id="instagram" class="info-in"></div>
              </a>
            </div>
            <p class="mobile-text">&#174; Mommy Yummy / 2020<br></br>-Москва</p>
            <a class="mobile-text bekishev" href="https://bekishev.com/">Made in Bekishev Studio</a>
            <p id="textimg2">
                Без глютена, яиц, молока, животных жиров,
                мёда,красителей,<br></br>консерантов,стабилизаторов и усилителей вкуса.
                <br></br>&#174; Mommy Yummy / 2020-Москва
              </p>
              <div class="madeby"><a href="https://bekishev.com/">Made In Bekishev Studio</a></div>
          </div>
          <div id="social_icons2">
          <a href="https://facebook.com"><div
            id="facebook" class="info-fb">
          </div></a>
          <a href="https://instagram.com"><div
            id="instagram" class="info-in">
          </div></a>
        </div>
        </div>
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
