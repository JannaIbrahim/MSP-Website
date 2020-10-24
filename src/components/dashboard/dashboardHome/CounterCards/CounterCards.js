import React, { Component } from "react";
import AllCounterCards from "./AllCounterCards";
import "./CounterCards.css";

export default class CounterCards extends Component {
  render() {
    return (
      <div class="row cards1 ">
        {/********* Start E-mails Counter **********/}
        <div class="col-xl-3 col-sm-6 ">
          <AllCounterCards
            icon="fas fa-envelope"
            text="2020 Emails"
            num="+5,000"
            footericon="fas fa-history"
          />
        </div>
        {/********* End E-mails Counter **********/}

        {/********* Start Person Counter **********/}
        <div class="col-xl-3 col-sm-6">
          <AllCounterCards
            icon="fas fa-user-friends"
            text="2020 Students"
            num="+1,000"
            footericon="fas fa-history"
            
          />
        </div>
        {/********* End Person Counter **********/}

        {/********* Start Total Email Counter **********/}
        <div class="col-xl-3 col-sm-6 ">
          <AllCounterCards
            icon="fas fa-envelope"
            text="Total Emails"
            num="+25,000"
            footericon="fas fa-history"
          />
        </div>
        {/********* End Total email Counter **********/}

        {/********* Start Total Students Counter **********/}
        <div class="col-xl-3 col-sm-6 ">
          <AllCounterCards
            icon="fas fa-user-friends"
            text="Total Students"
            num="+4,000"
            footericon="fas fa-history"
          />
        </div>
        {/********* End Total Students Counter **********/}
      </div>
    );
  }
}
