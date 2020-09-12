import React, { Component } from "react";
import Layoyt from "../../dashboardShared/Layout/layout";
import "./AllDashboardEmailsPage.css";

const AllDashboardEmailsPage = () => {
  /*** Store Data For Table ***/
  const allEmailsData = [
    {
      id: 1,
      Name: "Mohamed Ahmed",
      Faculty: "Faculty of engineering",
      Department: "Civil Engineering",
      AcdemicYear: "3",
      ViewIcon: "fas fa-edit",
      DoneIcon: "fa fa-check-square"
    },
    {
      id: 2,
      Name: "Mohamed Ahmed",
      Faculty: "Faculty of engineering",
      Department: "Civil Engineering",
      AcdemicYear: "3",
      ViewIcon: "fas fa-edit",
      DoneIcon: "fa fa-check-square"
    },
    {
      id: 3,
      Name: "Mohamed Ahmed",
      Faculty: "Faculty of engineering",
      Department: "Civil Engineering",
      AcdemicYear: "3",
      ViewIcon: "fas fa-edit",
      DoneIcon: "fa fa-check-square"
    },
    {
      id: 4,
      Name: "Mohamed Ahmed",
      Faculty: "Faculty of engineering",
      Department: "Civil Engineering",
      AcdemicYear: "3",
      ViewIcon: "fas fa-edit",
      DoneIcon: "fa fa-check-square"
    },
    {
      id: 5,
      Name: "Mohamed Ahmed",
      Faculty: "Faculty of engineering",
      Department: "Civil Engineering",
      AcdemicYear: "3",
      ViewIcon: "fas fa-edit",
      DoneIcon: "fa fa-check-square"
    },
    {
      id: 6,
      Name: "Mohamed Ahmed",
      Faculty: "Faculty of engineering",
      Department: "Civil Engineering",
      AcdemicYear: "3",
      ViewIcon: "fas fa-edit",
      DoneIcon: "fa fa-check-square"
    },
    {
      id: 7,
      Name: "Mohamed Ahmed",
      Faculty: "Faculty of engineering",
      Department: "Civil Engineering",
      AcdemicYear: "3",
      ViewIcon: "fas fa-edit",
      DoneIcon: "fa fa-check-square"
    },
    {
      id: 8,
      Name: "Mohamed Ahmed",
      Faculty: "Faculty of engineering",
      Department: "Civil Engineering",
      AcdemicYear: "3",
      ViewIcon: "fas fa-edit",
      DoneIcon: "fa fa-check-square"
    }
  ];

  /*** Start Function to Recive data from state ***/
  const renderAllEmilsData = (allEmailsData, index) => {
    return (
      <tr key={index}>
        <td> {allEmailsData.Name} </td>
        <td> {allEmailsData.Faculty} </td>
        <td> {allEmailsData.Department} </td>
        <td> {allEmailsData.AcdemicYear} </td>
        <td>
          <i className={allEmailsData.ViewIcon}></i>
        </td>
        <td>
          <i className={allEmailsData.DoneIcon}></i>
        </td>
      </tr>
      /*** End Function to Recive data from state ***/
    );
  };

  return (
    <Layoyt>
      <div className="col-xl-10 col-lg-9 col-md-8 ml-auto emailTable">
        <div className="text">
          <p>University Email</p>
        </div>

        <table className="table">
          <thead>
            <tr className="tableHeader">
              <td>Name</td>
              <td>Faculty</td>
              <td>Department</td>
              <td>Acdemic Year</td>
              <td>View </td>
              <td> Done</td>
            </tr>
          </thead>
          <tbody>{allEmailsData.map(renderAllEmilsData)}</tbody>
        </table>
      </div>
    </Layoyt>
  );
};

export default AllDashboardEmailsPage;