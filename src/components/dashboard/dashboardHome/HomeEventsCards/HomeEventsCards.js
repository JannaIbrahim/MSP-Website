import React, { Component } from "react";
import SingleEvent from "./SingleEvent";
import "../CounterCards/CounterCards.css";

class HomeEventsCards extends Component {
  state = {
    eventInfo: [
      {
        id: 1,
        imgSrc: "../images/1.jpg",
        Kind: "New Upcoming Event",
        describtion: "Lorem ipsum dolor sit amet",
        icon: "fa fa-clock-o",
        time: "campaign set 2 days ago"
      },

      {
        id: 2,
        imgSrc: "../images/2.jpg",
        Kind: "New Upcoming Event",
        describtion: "Lorem ipsum dolor sit amet",
        icon: "fa fa-clock-o",
        time: "campaign set 2 days ago"
      },

      {
        id: 3,
        imgSrc: "../images/3.jpg",
        Kind: "New Upcoming Event",
        describtion: "Lorem ipsum dolor sit amet",
        icon: "fa fa-clock-o",
        time: "campaign set 2 days ago"
      }
    ]
  };
  render() {
    return (
      <div >
        <SingleEvent Info={this.state.eventInfo} />
      </div>
    );
  }
}

export default HomeEventsCards;
