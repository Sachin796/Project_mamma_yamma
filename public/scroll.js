import $ from "jquery";
import Power1 from "gsap/EasePack";
import { TweenLite } from "gsap";

/*scroll the page horizontal*/
(function() {
  //automatic scroll
  // TweenLite.to("#gentags",2, {scrollTo:{x:400}})
  var content = document.getElementById("Cards");
  function scrollHorizontally(e) {
     e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    // ; // Multiplied by 40
    //TweenLite.to("content", 0.5, {scrollTo:{x:content.scrollLeft - (delta*40)}})
    TweenLite.to(content, 1.5, {
      ease: Power1.easeOut,
      scrollTo: { x: content.scrollLeft - delta * 500 }
    });
     
  if (content.addEventListener) {
    // IE9, Chrome, Safari, Opera
    content.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    content.addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    content.attachEvent("onmousewheel", scrollHorizontally);
  }
})();
