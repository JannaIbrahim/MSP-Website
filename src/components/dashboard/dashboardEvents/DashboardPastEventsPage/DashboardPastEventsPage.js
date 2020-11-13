import React, { Component } from 'react';
import './DashboardPastEventsPage.css';
import DashboardAddEventButton from './DashboardAddEventButton';
import DashboardPastEventsData from './DashboardPastEventsData';
import Layout from './../../dashboardShared/layout';
import { Link } from "react-router-dom";
class DashboardPastEventsPage extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Layout>
                <Link to="/dashboard/past-events/add-event">
           <DashboardAddEventButton/>
           </Link>
           <DashboardPastEventsData/>
           </Layout>
    </div>
    
     );
    
}}
 
export default DashboardPastEventsPage;