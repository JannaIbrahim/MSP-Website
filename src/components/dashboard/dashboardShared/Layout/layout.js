import React from "react";
import "./layout.css";

function Sidebar() {
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
      <a
        href="#"
        className="navbar-brand d-block mx-auto text-center py-2 mb-2 line"
      >
        MSP
      </a>

      <ul className="navbar-nav flex-column ">
        {/***** Start Links in Slider *****/}
        <li className="nav-item">
          {/*** link for home **/}
          <a href="#" className="nav-link    current">
            <i className="material-icons mr-2">dashboard</i>Home
          </a>
        </li>
        <li className="nav-item">
          {/*** Link for university-Email ***/}
          <a href="#" className="nav-link  sidebar-link">
            <i className="material-icons mr-2">language</i>University Email
          </a>
        </li>
        <li className="nav-item">
          {/*** Link for Best Member ***/}
          <a href="#" className="nav-link  sidebar-link">
            <i className="material-icons mr-2">person</i>Best Members
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link  sidebar-link">
            {/*** Link for Upcoming Events ***/}
            <i className="material-icons mr-2">content_paste</i>Upcoming Events
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link  sidebar-link">
            {/*** Link for Past Events ***/}
            <i className="material-icons mr-2">library_books</i>Past Events
          </a>
        </li>
        {/***** End Links in Slider *****/}
      </ul>
    </div>
  );
}

function Layout(props) {
  console.log(props);
  return (
    <div className={props.class}>
      <div className="navbar navbar-expand-md navbar-light">
        {/* Start Btton for showing nav in phone and small screen */}
        <button
          className="navbar-toggler ml-auto mb-2 bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* End Btton fo showing nav in phone and small screen */}
        <div className="collapse navbar-collapse" id="myNavbar">
          <div className="container-fluid">
            {/** Start div row for responsive ***/}
            <div className="row">
              {/** Start Coding For Sidebar ***/}
              <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
                <Sidebar />
              </div>
              {/** End Coding For Sidebar ***/}
              {/** Start Coding For TobHeader ***/}
              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto fixed-top  top-navbar">
                <div className="row align-items-center TobHeader">
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
                        <button
                          type="button"
                          className="btn btn-white search-button"
                        >
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
                {/** End Coding For TobHeader ***/}
              </div>
              {/** End div row for responsive ***/}
            </div>
          </div>
          {/** End code for nav in phone and small screen ***/}
        </div>
      </div>

      {/** Start To Show Elements in page **/}
      {props.children}
      {/** End To Show Elements in page **/}
    </div>
  );
}

export default Layout;