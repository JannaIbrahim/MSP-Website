import React, { Component } from 'react';
import '../../EventsSection/EventsSection.css';
class HiddenEvents extends Component {
    render() { 
        const {hiddenEventsData} = this.props;
        let hiddenEvent = hiddenEventsData.map((eventItem)=>{
            return(
                <div key = {eventItem.event_id} className='col-md col-sm-6 all-events' id='hidden' >
                    {/**event image */}
                    <img src = {eventItem.event_image} className='events-image' alt = "the event details"/>
                    {/**events title , date and location */}
                    <div className='events__details'>
                    <h3>{eventItem.event_title}</h3>
                    <p>
                      <span className='events__icon'><i className='far fa-calendar-alt'></i></span>  
                        {eventItem.event_date.the_date}
                    </p>
                    <p>
                      <span className="events__icon"><i className= 'fas fa-map-marker-alt'></i></span> 
                        {eventItem.event_location.the_location}
                    </p>
                    </div>
                </div>
                )
            });
        return ( <div className='events-card row'>{hiddenEvent}</div> );
    }
}
 
export default HiddenEvents;