var eyeballs = document.getElementsByClassName("leftebclass");
var eyeballsr = document.getElementsByClassName("rightebclass");

var currentMousePos = {
  x: 0,
  y: 0
};
let wHeight = window.innerHeight;
let wWidth = window.innerWidth;

document.onmousemove = function(event) {
  currentMousePos.x = event.pageX;
  currentMousePos.y = event.pageY;

  var trans1 = ((currentMousePos.x * 60) / wHeight) * 0.8 + "%";
  var trans2 = ((currentMousePos.y * 60) / wHeight) * 0.8 + "%";

  eyeballs[0].style.cssText =
    "-webkit-transform: translate(" + trans1 + ", " + trans2 + ")";
  eyeballsr[0].style.cssText =
    "-webkit-transform: translate(" + trans1 + ", " + trans2 + ")";
};
