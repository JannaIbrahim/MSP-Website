import React from "react";
import "./App.css";
import DashboardHomePage from "./components/dashboard/dashboardHome/DashboardHomePage/DashboardHomePage";
import DashboardHeader from "./components/dashboard/dashboardShared/DashboardHeader/DashboardHeader";
import Sidebar from "./components/dashboard/dashboardShared/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      {/***** Start code for nav in phone and small screen ****/}
      <div class="navbar navbar-expand-md navbar-light">
        {/** Start Btton fo showing nav in phone and small screen **/}
        <button
          class="navbar-toggler ml-auto mb-2 bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {/** End Btton fo showing nav in phone and small screen **/}
        <div class="collapse navbar-collapse" id="myNavbar">
          <div class="container-fluid">
            {/****** Start div row for responsive *******/}
            <div className="row">
              {/****** Start Coding For Sidebar *******/}
              <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
                <Sidebar />
              </div>
              {/****** End Coding For Sidebar *******/}
              {/****** Start Coding For TobHeader *******/}
              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto fixed-top  top-navbar">
                <DashboardHeader />
              </div>
              {/****** End Coding For TobHeader *******/}
            </div>
            {/****** End div row for responsive *******/}
          </div>
        </div>
        {/***** End code for nav in phone and small screen ****/}
      </div>
      {/******** Start Code For DashboardHome *********/}
      <DashboardHomePage />
      {/******** End Code For DashboardHome *********/}
    </div>
  );
}

export default App;


