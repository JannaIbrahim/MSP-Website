import React, { Component } from 'react';
import EventsSectionRender from './EventsSectionRender'
class EventsSectionData extends Component {
    state = { //save events data
        eventsData : [
            {//first event card
                "event_id": 1,
                "event_image": '../images/eventImage.jpeg',
                "event_title": "Mega Event",
                "event_date": {'the_date':'30 sep 2019'},
                "event_location":{
                  'the_location':'Anwar Al Mofti, Al Manteqah Al Oula, Nasr City, Cairo Governorate'}
            }, 
            {//second event card
                "event_id": 2,
                "event_image": '../images/eventImage.jpeg',
                "event_title": "Mega Event",
                "event_date": {'the_date':'30 sep 2019'},
                "event_location": {
                  'the_location':'Anwar Al Mofti, Al Manteqah Al Oula, Nasr City, Cairo Governorate'}
            },
            {//third event card
                "event_id": 3,
                "event_image": '../images/eventImage.jpeg',
                "event_title": "Mega Event",
                "event_date": {'the_date':'30 sep 2019'},
                "event_location": {
                  'the_location':'Anwar Al Mofti, Al Manteqah Al Oula, Nasr City, Cairo Governorate'}
            }
            
        ]
     }
    render() {
           return(
               <div>
                   <EventsSectionRender eventsData = {this.state.eventsData}/>
               </div>
           )
   
}}
 
export default EventsSectionData;