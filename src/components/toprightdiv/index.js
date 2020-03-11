import React from "react";
import Circle from "../navigation/index";
import ImageBorder from "../images/circular_around_top_righ_div.png";
import toprightimage from "../images/topright.png";
import Topbottom from "../../components/border/top_bottom";

function toprightdiv() {
  const vertices = [
    [0, 316],
    [742, 316, 0, 1, 1, 1484, 316],
    [742, 316, 0, 1, 1, 0, 316],
    [0, 316],
    [742, 316, 0, 1, 1, 1484, 316],
    [742, 316, 0, 1, 1, 0, 316]
  ];
  let textPath = `<textPath xlink:href="#textPath03"><a>Без глютена, яиц, молока, животных жиров, мёда,красителей,
  консерантов,стабилизаторов и усилителей вкуса.
  ® Mommy Yummy / 2020-Москва </a>
  <a>Без глютена, яиц, молока, животных жиров, мёда,красителей,
  консерантов,стабилизаторов и усилителей вкуса.
  ® Mommy Yummy / 2020-Москва</a>
  <a> Без глютена, яиц, молока, животных жиров, мёда,красителей,
  консерантов,стабилизаторов и усилителей вкуса.
  ® Mommy Yummy / 2020-Москва</a> 
  <a>Без глютена, яиц, молока, животных жиров, мёда,красителей,
  консерантов,стабилизаторов и усилителей вкуса.
  ® Mommy Yummy / 2020-Москва</a>
  </textPath>`;

  // <animate attributeName="startOffset" from="0%" to="10%" dur="5s" repeatCount="100" ></animate>
  return (
    <>
      <div id="toprightdiv">
        <div id="hero-img"></div>
        <div class="text-wrapper">
          {/* <svg viewBox="0 0 50 50" id="menu-svg" stroke="red" data-reactid="13">
            <defs data-reactid="14">
              <ellipse
                id="textPath03"
                data-reactid="15"
                fill="yellow"
                cx="50%"
                cy="50%"
                rx="50%"
                ry="50%"
              />
            </defs>
            <use
              xmlnsXlink="#textPath03"
              fill="yellow"
              stroke="red"
              data-reactid="19"
            ></use>
            <text
              id="svg-text"
              letter-spacing="1px"
              fill="red "
              textLength="702%"
              dangerouslySetInnerHTML={{ __html: textPath }}
              y="-5"
            ></text>
            ;
          </svg> */}
        </div>
      </div>
    </>
  );
}

export default toprightdiv;
