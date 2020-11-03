import React, { Component } from "react";
import "./Counter.css";
import AllCounters from "./AllCounters";


class Counter extends Component {
  render() {
    return (
      <div className="counter">
      {/******************* Start Container Div **************/}
        <div className="container">
          {/*************** Start row div for responsive ***************/}
          <div className="row content-of-icons ">
            {/******* Start Person Icons and paragraph ********/}
            <div className="parent col-md-3 col-sm-6 col-12 ">
              <AllCounters icon="persons fas fa-user-friends" num="55000" text="Follower" />
            </div>
            {/******* End Person Icons and paragraph ********/}

            {/******* Start Graduation Icons and paragraph ********/}
            <div className="parent col-md-3 col-sm-6 col-12 ">
              <AllCounters icon="fa fa-graduation-cap" num="4000" text="Student" />
            </div>
            {/******* End Graduation Icons and paragraph ********/}

            {/******* Start Camp Icons and paragraph ********/}
            <div className="parent col-md-3 col-sm-6 col-12 ">
              <AllCounters icon="fas fa-archway" num="200" text="Camp" />
            </div>
            {/******* End Camp Icons and paragraph ********/}

            {/******* Start Location Icons and paragraph ********/}
            <div className="parent col-md-3 col-sm-6 col-12 ">
              <AllCounters icon="fas fa-map-marker-alt" num="70" text="Event" />
            </div>
            {/******* End Location Icons and paragraph ********/}
          </div>
          {/*************** End row div for responsive ***************/}
        </div>
      {/******************* End Container Div **************/}
      </div>
    );
  }
}

export default Counter;
