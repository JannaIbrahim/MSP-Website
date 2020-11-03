import React, { Component } from "react";
import "./Sidebar.css"

class Sidebar extends Component {
  render() {
    return (
      <div className="dashboard-slider">
        <a
          href="#"
          className="navbar-brand d-block mx-auto text-center py-2 mb-2 line"
        >
          MSP
        </a>
        <ul className="navbar-nav flex-column ">
          {/************* Start Links in Slider ***********/}
          <li className="nav-item">
            {/******** link for home *****/}
            <a href="#" className="nav-link    current">
              <i className="material-icons mr-2">dashboard</i>Home
            </a>
          </li>
          <li className="nav-item">
            {/******* Link for university-Email *******/}
            <a href="#" className="nav-link  sidebar-link">
              <i className="material-icons mr-2">language</i>University Email
            </a>
          </li>
          <li className="nav-item">
            {/******* Link for Best Member *******/}
            <a href="#" className="nav-link  sidebar-link">
              <i className="material-icons mr-2">person</i>Best Members
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link  sidebar-link">
              {/******* Link for Upcoming Events *******/}
              <i className="material-icons mr-2">content_paste</i>Upcoming
              Events
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link  sidebar-link">
              {/******* Link for Past Events *******/}
              <i className="material-icons mr-2">library_books</i>Past Events
            </a>
          </li>
          {/************* End Links in Slider ***********/}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
