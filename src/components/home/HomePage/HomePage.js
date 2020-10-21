import React, { Component } from "react";

import Counter from "./../Counter/Counter";
import Header from "../../shared/Header/Header";
import CardMembers from "../BestMembers/BestMembers";
import { Route } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <Counter />
        <CardMembers />
      </div>
    );
  }
}

export default HomePage;
