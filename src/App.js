import React from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import EventsPage from "./components/events/EventsPage/EventsPage";

// importing dashboard
import DashboardHomePage from "./components/dashboard/dashboardHome/DashboardHomePage/DashboardHomePage";
import DashboardPastEventsPage from './components/dashboard/dashboardEvents/DashboardPastEventsPage/DashboardPastEventsPage';
import DashboardAddEventPage from './components/dashboard/dashboardEvents/DashboardAddEventPage/DashboardAddEventPage';


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/events" exact component={EventsPage} />
          <Route path="/about" exact component={AboutPage} />
        </Switch>
        <Switch>
          <Route path="/dashboard/home" exact component={DashboardHomePage} />
          <Route path="/dashboard/past-events" exact component={DashboardPastEventsPage} />
          <Route path="/dashboard/past-events/add-event" exact component={DashboardAddEventPage} />
        </Switch>
      </div>
    </Router>

  );

  return <div className="App"></div>;

}

export default App;