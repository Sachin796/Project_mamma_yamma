import React from "react";
import SvgComponent from "../svg_jsx/image2.jsx";
// import Lefteb from "../images/ebleft.png";
// import Righteb from "../images/ebright.png";

// const grayscaleimg = props => {
//   console.log(props);
//   document.getElementsByClassName("imgcircle").onLoad = function() {
//     let image = props;
//     var myCanvas = document.createElement("canvas");
//     var myCanvasContext = myCanvas.getContext("2d");

//     var imgWidth = "486px";
//     var imgHeight = "486px";
//     // You'll get some string error if you fail to specify the dimensions
//     myCanvas.width = imgWidth;
//     myCanvas.height = imgHeight;
//     //  alert(imgWidth);
//     myCanvasContext.drawImage(image, 0, 0);
//     console.log(myCanvasContext);
//     // This function cannot be called if the image is not rom the same domain.
//     // You'll get security error if you do.
//     var imageData = myCanvasContext.getImageData(0, 0, imgWidth, imgHeight);
//     let i;
//     // This loop gets every pixels on the image and
//     for (let j = 0; j < imageData.height; i++) {
//       for (i = 0; i < imageData.width; j++) {
//         var index = i * 4 * imageData.width + j * 4;
//         var red = imageData.data[index];
//         var green = imageData.data[index + 1];
//         var blue = imageData.data[index + 2];
//         var alpha = imageData.data[index + 3];
//         var average = (red + green + blue) / 3;
//         imageData.data[index] = average;
//         imageData.data[index + 1] = average;
//         imageData.data[index + 2] = average;
//         imageData.data[index + 3] = alpha;
//       }
//     }

//     if (true) {
//       var myDiv = document.createElement("div");
//       myDiv.appendChild(myCanvas);
//       image.parentNode.appendChild(myCanvas);
//     }
//     return myCanvas.toDataURL();
//   };
// };

function Circle(props) {
  return (
    <>
      <div className={props.className}>
        <img
          src={props.src}
          className="imgcircle"
          // onLoad={grayscaleimg(props.src)}
        ></img>
        <div id="lefteb" className="leftebclass"></div>
        <div id="righteb" className="rightebclass"></div>
        {/* <SvgComponent></SvgComponent> */}
      </div>
    </>
  );
}

export default Circle;
