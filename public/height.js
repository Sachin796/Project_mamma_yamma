window.addEventListener("load", function() {
  var x = Math.round((window.innerWidth / 20) * 9);
  var collection = document.getElementsByClassName("lrb");
  var border = document.getElementsByClassName("lrroot");

  collection[0].style.height = x + "px";
  collection[1].style.height = x + "px";
  border[0].style.height = x + "px";
  border[1].style.height = x + "px";

  window.onresize = function(event) {
    var x = Math.round((window.innerWidth * 11) / 15);

    collection[0].style.height = x + "px";
    collection[1].style.height = x + "px";
    border[0].style.height = x + "px";
    border[1].style.height = x + "px";
  };
});
