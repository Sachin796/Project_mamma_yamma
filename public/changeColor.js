// function changeColor() {
//   var e = document.getElementById("facebook");
//   console.log(e);
//   var c = window.getComputedStyle(e).backgroundColor;
//   console.log(c);
//   if (c === "rgb(0, 0, 0)") {
//     document.getElementById("facebook").style.background = "#ff77ee";
//   } else {
//     document.getElementById("facebook").style.background = "#000";
//   }
// }

window.onload = () => {
  var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");
  c.fillStyle = "grey";
  c.fillRect(0, 0, canvas.width, canvas.height);
};
