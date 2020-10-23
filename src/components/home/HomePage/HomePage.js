import React, { Component } from "react";

import Header from "../../shared/Header/Header";
import Slider from "./../Slider/Slider";
import Counter from "./../Counter/Counter";
import EventsSection from "./../../events/EventsSection/EventsSection";
import CardMembers from "../BestMembers/BestMembers";
import Footer from "./../../shared/Footer/Footer";

import { Route } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <Slider />
        <Counter />
        <EventsSection />
        <CardMembers />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
