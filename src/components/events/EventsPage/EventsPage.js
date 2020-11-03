import React, { Component } from "react";
import "../EventsSection/EventsSection.css";
import UpComingEventsSection from "./UpCamingEventSection/UpCamingEventsSection";
import HiddenEventsSection from "./HiddenEventSection/HiddenEventsSection";
import LastEventsSection from "./LastEventSection/LastEventsSection";

import Header from "./../../shared/Header/Header";
import Footer from "./../../shared/Footer/Footer";

class EventsPage extends React.Component {
  render() {
    return (
      //all Event Page
      <div className="events-page">
        <Header />
        <div className="events-section container">
          {/* *SHOW ALL CAMING EVENTS */}
          <UpComingEventsSection />
          {/**SHOW ALL LAST EVENTS */}
          <LastEventsSection />
          {/**SHOW ALL EVENTS */}
          <HiddenEventsSection />
        </div>
        <Footer />
      </div>
    );
  }
}

export default EventsPage;
