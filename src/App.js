import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Services from "./component/pages/Services";
import SignUp from "./component/pages/SignUp";
import About from "./component/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/booking-terms" component={Services} />
          <Route path="/about-us" component={About} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
