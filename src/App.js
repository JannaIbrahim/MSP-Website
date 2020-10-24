import React from "react";

import "./App.css";
import Counter from "./components/home/Counter/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import EventsPage from "./components/events/EventsPage/EventsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/events" exact component={EventsPage} />
          <Route path="/about" exact component={AboutPage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;

