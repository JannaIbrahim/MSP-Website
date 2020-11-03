import React, { Component } from "react";
import "./DashboardHeader.css"

export default class DashboardNav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="col-xl-10 col-lg-9 col-md-8 ml-auto fixed-top  top-navbar">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h4 className=" logo">Home</h4>
            </div>
            <div className=" col-md-5">
              <form>
                <div className=" input-group ">
                  <input
                    type="text"
                    className=" form-control search-input"
                    placeholder="Search..."
                  />
                  <button type="button" className="btn btn-white search-button">
                    <i className="material-icons">search</i>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-3">
              <ul className="navbar-nav ">
                <li className="nav-item icon-parent ml-auto">
                  <a href="#" className="nav-link">
                    <i className="material-icons clr">dashboard</i>
                  </a>
                </li>
                <li className="nav-item icon-parent ml-auto">
                  <a href="#" className="nav-link icon-bullet">
                    <i className="material-icons clr">notifications </i>
                  </a>
                </li>
                <li className="nav-item icon-parent ml-auto">
                  <a href="#" className="nav-link">
                    <i className="material-icons clr">person</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
