import React, { Component } from "react";
import "./Counter.css";

class SecondCounter extends Component {
  render() {
    return (
      <div className="second-div all-icons">
        {/******** Start Second div for Icons and paragraph ********/}
        <div className="second-counter icons ">
          {/*************** Start Second Icon ***************/}
          <div className="second-icon">
            <i class="icon-shape fa fa-graduation-cap"></i>
          </div>
          {/*************** End Second Icon ***************/}

          {/*************** Start Second Paragrarh ***************/}
          <div className="text-of-icons">
            <p>
              4000 <span> Student </span>{" "}
            </p>
          </div>
          {/*************** End Second Paragrarh ***************/}
        </div>
        {/******** End Second div for Icons and paragraph ********/}
      </div>
    );
  }
}

export default SecondCounter;
