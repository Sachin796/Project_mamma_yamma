
// if(window.location.pathname = "/about")
// {
//   // console.log("Hello")
// }

var currentMousePos = {
  x: 0,
  y: 0
},
  wHeight = window.innerHeight,
  wWidth = window.innerWidth;
document.body.onmousemove = function (event) {
  // console.log(event);
  currentMousePos.x = event.pageX;
  currentMousePos.y = event.pageY;
  var trans1 = ((currentMousePos.x * 60) / wHeight) * 0.8 + "%", //Image
    trans2 = ((currentMousePos.y * 60) / wHeight) * 0.8 + "%"; //Image

    
  document.getElementById("eye").style.transform =
    "translate(" + trans1 + ", " + trans2 + ")";
  document.getElementById("eye2").style.transform =
    "translate(" + trans1 + ", " + trans2 + ")";
  document.getElementById("eye3").style.transform =
    "translate(" + trans1 + ", " + trans2 + ")";
  document.getElementById("eye4").style.transform =
    "translate(" + trans1 + ", " + trans2 + ")";
};
