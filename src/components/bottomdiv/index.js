import React from "react";
import Card from "../bottomcard/frontCard.js";

function bottomdiv() {
  return (
    <>
      <div id="cardDiv" className="col l4 m8 s12">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  );
}

export default bottomdiv;
