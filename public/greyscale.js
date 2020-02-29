window.addEventListener("load", function() {
  var url =
    "https://sherwin.scene7.com/is/image/sw/color-swatch?_tparam_size=250,250&layer=comp&_tparam_color=C2C0BB";
  var canvas = document.getElementById("canvas");

  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.src = url;
  img.onload = function() {
    var width = window.screen.width;
    var height = window.screen.height;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(img, 0, 0, width, height);
  };

  var isPress = false;
  var old = null;

  canvas.addEventListener("mousemove", function(e) {
    // old = {
    //   x: e.offsetX,
    //   y: e.offsetY
    // };
    // if (isPress) {
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.globalCompositeOperation = "destination-out";
    // ctx.beginPath();
    ctx.arc(x, y + 100, 45, 0, 2 * Math.PI);
    ctx.fill();
    console.log(ctx);

    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(old.x, old.y);
    // ctx.lineTo(x, y);
    ctx.stroke();
    ctx.filter = "blur(1px)";

    // old = {
    //   x: x,
    //   y: y
    // };
  });

  canvas.addEventListener("mouseup", function(e) {
    isPress = false;
  });
});
