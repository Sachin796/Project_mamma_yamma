import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mainpage from "./pages/index";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Mainpage></Mainpage>
        </Router>
      </>
    );
  }
}

export default App;
