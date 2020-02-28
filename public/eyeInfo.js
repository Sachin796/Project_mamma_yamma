
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
if (window.location.href.indexOf("/about") > -1) {
    document.body.onmousemove = function (event) {
      // console.log(event);
      currentMousePos.x = event.pageX;
      currentMousePos.y = event.pageY;
      var trans1 = ((currentMousePos.x * 60) / wHeight) * 0.8 + "%", //Image
        trans2 = ((currentMousePos.y * 60) / wHeight) * 0.8 + "%"; //Image

        
          document.getElementById("eye5").style.transform =
          "translate(" + trans1 + ", " + trans2 + ")";
          document.getElementById("eye6").style.transform =
            "translate(" + trans1 + ", " + trans2 + ")";
    };

}
