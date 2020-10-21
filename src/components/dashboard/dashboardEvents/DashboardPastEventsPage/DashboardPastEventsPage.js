import React, { Component } from 'react';
import './DashboardPastEventsPage.css';
import DashboardAddEventButton from './DashboardAddEventButton';
import DashboardPastEventsData from './DashboardPastEventsData'
class DashboardPastEventsPage extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
           <DashboardAddEventButton/>
           <DashboardPastEventsData/>
    </div>
    
     );
    
}}
 
export default DashboardPastEventsPage;