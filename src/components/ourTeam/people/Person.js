import React, { Component } from "react";
import "./AllPeople.css";

export default class Person extends Component {
  render() {
    let { Info } = this.props;

    let people = Info.map(peopleInfo => {
      return (
        <div className="col-md-4 col-sm-6 col-12" key={peopleInfo.id}>
          {/*** Start PArent Div ***/}
          <div className="parent container">
            {/*** Start Showing Image for Each Person ****/}
            <div className="person-Image ">
              <img src={peopleInfo.pic} />
            </div>
            {/*** End Showing Image for Each Person ****/}

            {/** Start Showing Name for Each Person **/}
            <div className="person-name">
              <h5>{peopleInfo.name}</h5>
            </div>
            {/** End Showing Name for Each Person **/}

            {/** Start Showing Position for Each Person **/}
            <div className="person-position">
              <p>{peopleInfo.position}</p>
            </div>
            {/** End Showing Name for Each Person **/}

            {/** Start Showing GithubLink for Each Person **/}
            <div className="person-Link">
              <i className={peopleInfo.icon}></i>
              <a href={peopleInfo.linnk} target="_blank">
                {peopleInfo.name}
              </a>
            </div>
            {/** Start Showing Name for Each Person **/}
          </div>
          {/** End Parent Div **/}
        </div>
      );
    });
    return <div className="events row">{people}</div>;
  }
}