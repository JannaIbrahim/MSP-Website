import React, { Component } from "react";
import "../CounterCards/CounterCards.css";

class SingleEvent extends Component {
  render() {
    const { Info } = this.props;
    const allEvent = Info.map(event => {
      return (
        <div className="single-event col-md-4 col-sm-12">
          <div className="card-icon">
            <img className="w-100 events" src={event.imgSrc} />
          </div>
          <div className="card-body">
            <h5 className="card-title"> {event.Kind} </h5>
            <p className="card-category"> {event.describtion} </p>
          </div>

          <div className="  card-footer">
            <div className="stats">
              <i className={event.icon}></i>
              <span>{event.time}</span>
            </div>
          </div>
        </div>
      );
    });

    return <div className="events row">{allEvent}</div>;
  }
}

export default SingleEvent;
