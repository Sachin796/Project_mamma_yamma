import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mainpage from "./pages/index";
import Inforpage from "./components/infopage/index";
import "./App.css";
import { TweenLite, TimelineMax, Linear, Back, Sine } from "gsap/all";
import CircleType from "circletype";

class App extends Component {
  componentDidMount() {
    // const circletype = new CircleType(document.getElementById("toprightdiv"));
    // circletype.forceWidth(true);
    // TweenLite.set();
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Mainpage></Mainpage>
            </Route>
            <Route path="/about" exact>
              <Inforpage></Inforpage>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
