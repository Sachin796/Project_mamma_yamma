var eyeballs = document.getElementsByClassName("leftebclass");
var eyeballsr = document.getElementsByClassName("rightebclass");
document.onmousemove = function(event) {
  console.log(event);
  var x = (event.clientX * 120) / window.innerWidth + "%";
  var y = (event.clientY * 120) / window.innerHeight + "%";
  //event.clientX => get the horizontal coordinate of the mouse
  //event.clientY => get the Vertical coordinate of the mouse
  //window.innerWidth => get the browser width
  //window.innerHeight => get the browser height

  for (var i = 0; i < 2; i++) {
    eyeballs[i].style.left = x - (y - 300);
    eyeballs[i].style.top = x - y + 60;
    eyeballs[i].style.transform = "translate(" + x + "," + y + ")";
    eyeballsr[i].style.left = x - y;
    eyeballsr[i].style.top = x - y;
    eyeballsr[i].style.transform = "translate(" + x + "," + y + ")";
  }
};
