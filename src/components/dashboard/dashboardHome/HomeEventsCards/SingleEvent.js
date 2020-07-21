import React, { Component } from "react";
import "../CounterCards/CounterCards.css";

class SingleEvent extends Component {
  render() {
    const { Info } = this.props;
    const allEvent = Info.map(event => {
      return (
        <div className="card card-chart col-md-4 col-sm-12">
          {/****** Start Parent Div ******/}
          <div className="card-header">
            {/****** Start Image of Evevnt *******/}
            <div className="card-icon">
              <img className="w-100 events" src={event.imgSrc} />
            </div>
            {/****** End Image of Evevnt *******/}

            {/****** Start Caption of Evevnt *******/}
            <div className="card-body">
              <h5 className="card-title"> {event.Kind} </h5>
              <p className="card-category"> {event.describtion} </p>
            </div>
            {/****** End Caption of Evevnt *******/}

            {/****** Start Footer of Evevnt *******/}
            <div className="card-footer">
              <div className="stats">
                <i className={event.icon}></i>
                <span>{event.time}</span>
              </div>
            </div>
            {/****** End Footer of Evevnt *******/}
          </div>
          {/****** End Parent Div ******/}
        </div>
      );
    });

    return <div className="events row">{allEvent}</div>;
  }
}

export default SingleEvent;
