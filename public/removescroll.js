var scrollListenerActive = false;
var handleScrollListener = function() {
  if (window.innerWidth < 786 && !scrollListenerActive) {
    console.log(`Fired when innerwidth ${window.innerWidth}`);
    // console.log(document.getElementsByClassName("cardi")[1].classList);
    document.getElementById("maindiv").style.overflow = "visible";
    document.getElementById("maindiv").style.overflowY = "scroll";
    let cardsObj = document.getElementsByClassName("cardi");
    for (let i = 8; i <= 31; i++) {
      cardsObj[i].style.display = "none";

      // document.getElementsByClassName("cardi")[i].className = "cardii";
    }
    scrollListenerActive = true;
  } else {
    document.getElementById("maindiv").style.overflow = "hidden";
    document.getElementById("maindiv").style.overflowY = "hidden";
    let cardsObj = document.getElementsByClassName("cardi");
    for (let i = 8; i <= 31; i++) {
      cardsObj[i].style.display = "inline-block";
      // document.getElementsByClassName("cardii")[i].className = "cardi";
    }
    scrollListenerActive = false;
  }
  scrollListenerActive = false;
};
document.addEventListener("load", handleScrollListener); // attach the listener on page load
window.onresize = handleScrollListener; // attach/remove listener on window resize
