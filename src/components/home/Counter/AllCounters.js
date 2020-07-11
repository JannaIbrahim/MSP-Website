import React, { Component } from "react";
import "./Counter.css";

class AllCounters extends Component {
  render() {
    return (
      <div className="all-icons">
        <div>
            {/************** Get Icons From Props ********************/}
          <i class={this.props.icon}></i>

          {/************** Get Paragraph From Props ********************/}
          <p>
            {this.props.num}
            <span> {this.props.text} </span>
          </p>
        </div>
      </div>
    );
  }
}

export default AllCounters;
