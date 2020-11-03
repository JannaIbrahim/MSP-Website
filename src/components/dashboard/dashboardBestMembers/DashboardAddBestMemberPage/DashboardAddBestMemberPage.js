import React from "react";
import Layout from "../../dashboardShared/Layout/layout";
import "./DashboardAddBestMemberPage.css";

const DashboardAddBestMemberPage = () => (
  <Layout>
    <div className="best col-xl-10 col-lg-9 col-md-8 ml-auto">
        <div className="heading">
        <h1>New Best Member</h1>
        </div>
      <div className="member">
        <input className="name" type="text" name="Name" placeholder="Name" />
        <input type="num" name="Month" placeholder="Month" />
        <input type="text" name="Commity" placeholder="Commity" />
        <input type="text" name="Sub Commity" placeholder="Sub Commity" />
        <input type="image" name="Photo" placeholder="Photo" />

        <button className="bttn one">CHOOSE IMAGE</button>

        <button className="bttn two">Add Best Member</button>
      </div>
    </div>
  </Layout>
);

export default DashboardAddBestMemberPage;