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
            <span className="count-num" target="{this.props.num}">0</span>
            <span> {this.props.text} </span>
          </p>
        </div>
      </div>
    );
  }
}

export default AllCounters;
