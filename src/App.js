import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        {/* routing set for navbar elements */}
        <Router>
          <Navbar navTitle="Class-Based"></Navbar>
 
          <Switch>
            <Route exact path="/"><News heading="Your Daily News Contents" pageSize={6} country="us" categories="general" /></Route>
            <Route exact path="/general"><News key="general" heading="Your Daily News Contents" pageSize={6} country="us" categories="general" /></Route>
            <Route exact path="/business"><News key="business" heading="Your Daily News Contents" pageSize={6} country="us" categories="business" /></Route>
            <Route exact path="/entertainment"><News heading="Your Daily News Contents" pageSize={6} country="us" categories="entertainment" /></Route>
            <Route exact path="/health"><News heading="Your Daily News Contents" pageSize={6} country="us" categories="health" /></Route>
            <Route exact path="/science"><News heading="Your Daily News Contents" pageSize={6} country="us" categories="science" /></Route>
            <Route exact path="/sports"><News heading="Your Daily News Contents" pageSize={6} country="us" categories="sports" /></Route>
            <Route exact path="/technology"><News heading="Your Daily News Contents" pageSize={6} country="us" categories="technology" /></Route>
          </Switch>
          
        </Router>
      </>
    );
  }
}

export default App;
