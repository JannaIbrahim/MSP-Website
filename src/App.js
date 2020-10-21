import React from "react";

import "./App.css";
import Counter from "./components/home/Counter/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </div>
    </Router>

  );

}

export default App;
