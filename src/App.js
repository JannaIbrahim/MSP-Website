import React from "react";
import "./App.css";
import EventsSection from "./components/events/EventsSection/EventsSection";
import DashboardAddEventPage from './components/dashboard/dashboardEvents/DashboardAddEventPage/DashboardAddEventPage';
import DashboardSingleEmailPage from "./components/dashboard/dashboardEmail/DashboardSingleEmailPage/DashboardSingleEmailPage";
import DashboardAddMemberPage from './components/dashboard/dashboardBestMembers/DashboardAddBestMemberPage/DashboardAddBestMemberPage'
import DashboardAddBestMemberPage from "./components/dashboard/dashboardBestMembers/DashboardAddBestMemberPage/DashboardAddBestMemberPage";
import EventsPage from './components/events/EventsPage/EventsPage';
import AboutUs from "./components/AboutPage/AboutSection";
function App() {
  return <div className="App">
    <EventsSection/>
    <DashboardAddEventPage/>
    <DashboardSingleEmailPage/>
    <DashboardAddBestMemberPage/>
    <EventsPage/>
    <AboutUs/>
  </div>;
}

export default App;
