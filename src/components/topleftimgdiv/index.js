import React from "react";
import Circle from "../circle/index";
import CircleRight from "../circle/circletopright";
// import logo from "./image1.jpg";
import logo from "../images/topleft_rightimgred.png";
import logo1 from "../images/topleft_noeyes.png";

function topimage() {
    return (
        <>
            <div id="topleftimg" >
                <div class="circles">
                    <Circle className="circletopleft" id="circletopleft" src={logo1} ></Circle>
                    <CircleRight className="circletopright" src={logo} ></CircleRight>
                </div>
            </div >
        </>
    );
}

export default topimage;