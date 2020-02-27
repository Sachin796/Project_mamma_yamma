var divleft = document.getElementsByClassName("face");
var divright = document.getElementsByClassName("circletopright");
var angle = 0;
document.onwheel = function(e) {
  if (e.deltaY) {
    console.log(divleft);
    // we have a wheel for vertical (common) direction
    e.preventDefault();
    angle += e.deltaY < 0 ? 10 : -10; // what direction?
    divleft[0].style.transform = "rotate(" + angle + "deg)"; // do something
    divright[0].style.transform = "rotate(" + angle + "deg)"; // do something
  }
};
