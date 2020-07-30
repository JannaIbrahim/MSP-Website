import React from "react";
import "./App.css";
import EventsSection from "./components/events/EventsSection/EventsSection";
import DashboardAddEventPage from './components/dashboard/dashboardEvents/DashboardAddEventPage/DashboardAddEventPage';
import DashboardSingleEmailPage from "./components/dashboard/dashboardEmail/DashboardSingleEmailPage/DashboardSingleEmailPage";
import DashboardAddMemberPage from './components/dashboard/dashboardBestMembers/DashboardAddBestMemberPage/DashboardAddBestMemberPage'
import DashboardAddBestMemberPage from "./components/dashboard/dashboardBestMembers/DashboardAddBestMemberPage/DashboardAddBestMemberPage";
function App() {
  return <div className="App">
    <EventsSection/>
    <DashboardAddEventPage/>
    <DashboardSingleEmailPage/>
    <DashboardAddBestMemberPage/>
  </div>;
}

export default App;
