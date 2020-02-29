window.addEventListener("load", function() {
  init();

  function init() {
    var url =
      "https://sherwin.scene7.com/is/image/sw/color-swatch?_tparam_size=250,250&layer=comp&_tparam_color=C2C0BB";

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = url;
    img.crossOrigin = "Anonymous";

    img.onload = function() {
      var width = window.screen.width;
      var height = window.screen.height;

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
    };

    function drawPoint(pointX, pointY) {
      var imageData = ctx.getImageData(
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
      );
      imageData.crossOrigin = "Anonymous";

      ctx.globalCompositeOperation = "destination-out";
      ctx.arc(pointX, pointY, 45, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 20;
      ctx.beginPath();
      ctx.stroke();
      ctx.filter = "blur(1px)";
      var trans = 0;
      for (var i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] <= 10) {
          trans++;
        }
      }
      var total = imageData.data.length / 4;
      var percent = (trans / total) * 100;
      if (percent >= 75) {
        document.getElementById("canvas").style.display = "none";
      }
    }

    canvas.addEventListener(
      "touchstart",
      function(e) {
        drawPoint(e.touches[0].screenX, e.touches[0].screenY);
      },
      false
    );

    canvas.addEventListener(
      "touchmove",
      function(e) {
        e.preventDefault();
        drawPoint(e.touches[0].screenX, e.touches[0].screenY);
      },
      false
    );

    canvas.addEventListener(
      "mousemove",
      function(e) {
        e.preventDefault();
        drawPoint(e.screenX, e.screenY);
      },
      false
    );
  }
});
