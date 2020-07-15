import React, { Component } from "react";
import "./CounterCards.css"

class CounterCards extends Component {
  render() {
    return (
      <div className="card card-stats">
      <div class="card-header card-header-warning card-header-icon">
        <div class="card-icon">
          <i className={this.props.icon}></i>
        </div>
        <div class="text-right">
          <p className="card-text"> {this.props.text} </p>
          <h5 className="card-num"> {this.props.num} </h5>
        </div>
      </div>
      <div class="  card-footer">
        <div class="stats">
          <i className={this.props.footericon}>Just Updated</i>
        </div>
      </div>
    </div>


    );
  }
}

export default CounterCards;
