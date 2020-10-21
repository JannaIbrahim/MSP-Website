import React, { Component } from "react";
import "./Commitee.css";

export default class SingleCommitee extends Component {
  handleClick = e => {
    {
      /*** Start Function for Showing Describtion  ***/
    }
    let button = document.getElementsByClassName("button"),
      commiteeDescription = document.getElementsByClassName("describtion"),
      x;

    for (x = 0; x < button.length; x++) {
      button[x].addEventListener("click", function() {
        this.classList.toggle("active");

        commiteeDescription = this.nextElementSibling;

        if (commiteeDescription.style.display === "block") {
          commiteeDescription.style.display = "none";
        } else {
          commiteeDescription.style.display = "block";
        }
      });
    }
    {
      /*** End Function for Showing Describtion  ***/
    }
  };

  render() {
    {
      /*** Coding for create Button ***/
    }
    const { cards } = this.props;
    const allCardsDes = cards.map(cardsInfo => {
      return (
        <div className="button-value" key={cardsInfo.id}>
          <button className="button" onClick={this.handleClick}>
            <i className={cardsInfo.icon} ></i> {cardsInfo.name}
          </button>

          {/** This Div Contain Describtion ***/}
          <div className="describtion">{cardsInfo.des}</div>
          <hr className="line" />
        </div>
      );
    });
    return <div>{allCardsDes}</div>;
  }
}