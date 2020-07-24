import React from "react";
import "./App.css";
import EventsSection from "./components/events/EventsSection/EventsSection";
import DashboardAddEventPage from './components/dashboard/dashboardEvents/DashboardAddEventPage/DashboardAddEventPage'
function App() {
  return <div className="App">
    <EventsSection/>
    <DashboardAddEventPage/>
  </div>;
}

export default App;
