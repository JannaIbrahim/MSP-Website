import React, { Component } from 'react';
import './EventsSection.css';
class EventsSection extends Component {
    state = { 
        eventsData : [
            {
                "event_id": 1,
                "event_image": '../images/eventImage.jpeg',
                "event_title": "Mega Event",
                "event_date": {'date_icon' : 'far fa-calendar-alt',
               'the_date':'30 sep 2019'},
                "event_location":
                 {'location_icon': 'fas fa-map-marker-alt fa-3',
                  'the_location':'Anwar Al Mofti, Al Manteqah Al Oula, Nasr City, Cairo Governorate'}
            }, 
            {
                "event_id": 2,
                "event_image": '../images/eventImage.jpeg',
                "event_title": "Mega Event",
                "event_date": {'date_icon' :'far fa-calendar-alt',
                 'the_date':'30 sep 2019'},
                "event_location":
                 {'location_icon': 'fas fa-map-marker-alt',
                  'the_location':'Anwar Al Mofti, Al Manteqah Al Oula, Nasr City, Cairo Governorate'}
            },
            {
                "event_id": 3,
                "event_image": '../images/eventImage.jpeg',
                "event_title": "Mega Event",
                "event_date": {'date_icon' : 'far fa-calendar-alt',
               'the_date':'30 sep 2019'},
                "event_location":
                 {'location_icon':'fas fa-map-marker-alt',
                  'the_location':'Anwar Al Mofti, Al Manteqah Al Oula, Nasr City, Cairo Governorate'}
            }
            
        ]
     }
    render() { 
        const {eventsData} = this.state;
        let eventList = eventsData.map((eventItem)=>{
            return(
                <div key = {eventItem.event_id} className='col-md col-sm-6 all-events' >
                    <img src = {eventItem.event_image} className='events-image' alt = "the event details"/>
                    
                    <div className='events__details'>
                    <h3>{eventItem.event_title}</h3>
                    <p>
                      <span className='events__icon'><i className={eventItem.event_date.date_icon}></i></span>  
                        {eventItem.event_date.the_date}
                    </p>
                    <p>
                      <span className="events__icon"><i className= {eventItem.event_location.location_icon}></i></span> 
                        {eventItem.event_location.the_location}
                    </p>
                    </div>
                </div>
            )
        })
        return ( 
            <section className='events-section container'>
                <h2 className='events-header'>EVENTS</h2>
                <div className='row'>
                {eventList}
                </div>
               
            </section>
         );
    }
}
 
export default EventsSection;