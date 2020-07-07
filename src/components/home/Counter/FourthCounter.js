import React, { Component } from "react";
import "./Counter.css";

class FourthCounter extends Component {
  render() {
    return (
      <div className="fourth-div all-icons">
        {/******** Start Fourth div for Icons and paragraph ********/}
        <div className="fourth-counter icons ">
          {/*************** Start Four Icon ***************/}
          <div className="fourth-icon">
            <i class=" icon-shape material-icons">place</i>
          </div>
          {/*************** End Four Icon ***************/}

          {/*************** Start Four Paragrarh ***************/}
          <div className="text-of-icons">
            <p className="para">
              70 <span> Event </span>{" "}
            </p>
          </div>
          {/*************** End Four Paragrarh ***************/}
        </div>
        {/******** End Fourth div for Icons and paragraph ********/}
      </div>
    );
  }
}

export default FourthCounter;
