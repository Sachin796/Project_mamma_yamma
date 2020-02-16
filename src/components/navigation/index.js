import React from "react";
import ReactDOM from "react-dom";

function Circle(props) {
  const vertices = props.vertice;
  const pathdata = [
    "M",
    vertices[0][0],
    vertices[0][1],
    "A",
    vertices[1][0],
    vertices[1][1],
    vertices[1][2],
    vertices[1][3],
    vertices[1][4],
    vertices[1][5],
    vertices[1][6],
    "A",
    vertices[2][0],
    vertices[2][1],
    vertices[2][2],
    vertices[2][3],
    vertices[2][4],
    vertices[2][5],
    vertices[2][6],
    "Z",
    "M",
    vertices[3][0],
    vertices[3][1],
    "A",
    vertices[4][0],
    vertices[4][1],
    vertices[4][2],
    vertices[4][3],
    vertices[4][4],
    vertices[4][5],
    vertices[4][6],
    "A",
    vertices[5][0],
    vertices[5][1],
    vertices[5][2],
    vertices[5][3],
    vertices[5][4],
    vertices[5][5],
    vertices[5][6],
    "Z"
  ].join(" ");

  return (
    <>
      <div className={props.className} id={props.id}>
        <svg
          viewBox="0 0 1504 640"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path id="circleData" fill="none" d={pathdata} />

          <text id="textdata" font-size="20">
            <textPath href="#circleData">
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" jfjdsfj fdsjfdsj
            </textPath>
          </text>
        </svg>
      </div>
    </>
  );
}

export default Circle;
