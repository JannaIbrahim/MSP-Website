import React from "react";
import "./DashboardSingleEmailPage.css";
import Layout from "../../dashboardShared/Layout/layout.js";

const DashboardSingleEmailPage = () => (
  <Layout>
    <div className="singleEmail col-xl-10 col-lg-9 col-md-8 ml-auto">
      {/*** Start Header Of University Email ***/}
      <div className="text">
        <p>University Email</p>
      </div>
      {/*** End Header Of University Email ***/}

      {/*** Start Form For Regesertion ***/}
      <div className="form">
        <form>
          {/*** name & Pass & e-mail ****/}
          <input
            type="text"
            className="input-text"
            placeholder="Arabic Full Name"
          />
          <input
            type="text"
            className="input-text"
            placeholder="English Full Name"
          />
          <input
            type="number"
            className="input-text"
            placeholder="National ID Number"
          />
          <input type="text" className="input-text" placeholder="Faculty" />
          <input type="text" className="input-text" placeholder="Department" />
          <input
            type="text"
            className="input-text"
            placeholder="Academic Year"
          />

          <input type="submit" className="button" value="Copy" />
        </form>
      </div>
      {/*** End Form For Regesertion ***/}
    </div>
  </Layout>
);
export default DashboardSingleEmailPage;