import React, { Component } from "react";
import CounterCards from "../CounterCards/CounterCards";
import HomeEventsCards from "../HomeEventsCards/HomeEventsCards";
import "../CounterCards/CounterCards.css";

class DashboardHomePage extends Component {
  render() {
    return (
      <div className="dash-home">
        {/******* Start Counters Section ******/}
        <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
          <CounterCards />
        </div>
        {/******* End Counters Section ******/}
        {/******** Start Events Section *********/}
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
              <div className="row pt-md-4 mt-md-3 ">
                <HomeEventsCards />
              </div>
            </div>
          </div>
        </div>
        {/******** End Events Section *********/}
      </div>
    );
  }
}

export default DashboardHomePage;
