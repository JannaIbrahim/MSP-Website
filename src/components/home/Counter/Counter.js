import React, { Component } from "react";
import "./Counter.css";
import FirstCounter from "./FirstCounter";
import SecondCounter from "./SecondCounter";
import ThirdCounter from "./ThirdCounter";
import FourthCounter from "./FourthCounter";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div className="container">
          {/*************** Start row div for responsive ***************/}
          <div className="row content-of-icons ">
            {/******* Start First div for Icons and paragraph ********/}
            <div className="child-one child col-md-3 col-sm-6 col-12 ">
              <FirstCounter />
            </div>
            {/******* End First div for Icons and paragraph ********/}

            {/******* Start Second div for Icons and paragraph ********/}
            <div className="child-one child col-md-3 col-sm-6 col-12 ">
              <SecondCounter />
            </div>
            {/******* End Second div for Icons and paragraph ********/}

            {/******* Start Third div for Icons and paragraph ********/}
            <div className="child-one child col-md-3 col-sm-6 col-12 ">
              <ThirdCounter />
            </div>
            {/******* End Third div for Icons and paragraph ********/}

            {/******* Start Fourth div for Icons and paragraph ********/}
            <div className="child-one child col-md-3 col-sm-6 col-12 ">
              <FourthCounter />
            </div>
            {/******* End Fourth div for Icons and paragraph ********/}
          </div>
          {/*************** End row div for responsive ***************/}
        </div>
      </div>
    );
  }
}

export default Counter;
