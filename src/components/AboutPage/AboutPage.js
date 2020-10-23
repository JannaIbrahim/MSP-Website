import React, { Component } from "react";
import Script from "./AboutScript";
import Commitee from "./AboutCommittees";

import Header from "./../shared/Header/Header";
import Footer from "./../shared/Footer/Footer";

class AboutPage extends Component {
  render() {
    return (
      <div className="about">
        <Header />
        <Script />
        <Commitee />
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
