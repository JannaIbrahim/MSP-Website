import React, { Component } from "react";

import Counter from "./../Counter/Counter";
import Header from "../../shared/Header/Header";
import { Route } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <Counter />
      </div>
    );
  }
}

export default HomePage;
