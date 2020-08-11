import React, { Component } from "react";
import "./Header.css";
import logo from "./logo.png";
import { Links } from "react-router-dom;";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link to="/">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                alt="MSP logo"
                className="img-fluid"
                width="150px"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events">
                  <a className="nav-link" href="#">
                    Events
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/university-email">
                  <a className="nav-link" href="#">
                    University Email
                  </a>
                </Link>
              </li>
            </ul>
            {/* Search field and buttom in case we needed it  */}
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
