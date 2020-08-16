import React, { Component } from 'react';
import DashboardPastEventsRender from './DashboardPastEentsRender';
class DashboardPastEventsData extends Component {
    state = { //save events data
        pastEventsData : [
            {//first event card
                "event_id": 1,
                "event_image": '../images/eventImage.jpeg',
                "event_title": "Past Event",
                "event_date": {'the_date':'campaign set 2 days ago'},
                "event_description" : 'Lorem ipsum dolor sit amet'
            }, 
            {//second event card
                "event_id": 2,
                "event_image": '../images/eventImage.jpeg',
                "event_title": "Past Event",
                "event_date": {'the_date':'campaign set 2 days ago'},
                "event_description" : 'Lorem ipsum dolor sit amet'
            }
            
        ]
     }
    render() {
           return(
               <div>
                   <DashboardPastEventsRender pastEventsData = {this.state.pastEventsData}/>
               </div>
           )
   
}}
 
export default DashboardPastEventsData;