import React from "react";
import "./App.css";
import DashboardHomePage from "./components/dashboard/dashboardHome/DashboardHomePage/DashboardHomePage";
import AboutUs from "./components/home/AboutSection/AboutSection"

function App() {
  return (
    <div className="App">
      <DashboardHomePage />
      <AboutUs />
    </div>
  );
}

export default App;

