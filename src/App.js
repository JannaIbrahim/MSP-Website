import React from "react";
import "./App.css";
import EventsSection from "./components/events/EventsSection/EventsSection";
import DashboardAddEventPage from './components/dashboard/dashboardEvents/DashboardAddEventPage/DashboardAddEventPage';
import DashboardSingleEmailPage from "./components/dashboard/dashboardEmail/DashboardSingleEmailPage/DashboardSingleEmailPage";
import DashboardAddMemberPage from './components/dashboard/dashboardBestMembers/DashboardAddBestMemberPage/DashboardAddBestMemberPage'
import DashboardAddBestMemberPage from "./components/dashboard/dashboardBestMembers/DashboardAddBestMemberPage/DashboardAddBestMemberPage";
import EventsPage from './components/events/EventsPage/EventsPage';
import AboutUs from "./components/AboutPage/AboutSection";
import DashboardPastEventsPage from './components/dashboard/dashboardEvents/DashboardPastEventsPage/DashboardPastEventsPage'
import Footer from "./components/shared/Footer/Footer";
import OurTeam from "./components/ourTeam/OurTeam";
import DashboardLogginForm from './components/dashboard/dashboardLogginForm/dashboardLogginForm.js'
import AllDashboardEmailsPage from "./components/dashboard/dashboardEmail/DashboardEmailsPage/AllDashboardEmailsPage";
import SingleEventPage from "./components/events/SingleEventPage/SingleEventPage";
import Slider from './components/home/Slider/Slider'
function App() {
  return <div className="App">
    <EventsSection/>
    <DashboardAddEventPage/>
    <DashboardSingleEmailPage/>
    <DashboardAddBestMemberPage/>
    <EventsPage/>
    <AboutUs/>
    <DashboardPastEventsPage/>
    <Footer/>
    <OurTeam/>
    <DashboardLogginForm/>
    <AllDashboardEmailsPage />
    <SingleEventPage/>
    <Slider/>
  </div>
}

export default App;
