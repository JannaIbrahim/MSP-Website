import React, { Component } from 'react';
class EventsSectionRender extends Component {
    render() { 
        //calling data from the state
    const {eventsData} = this.props;
    //maping to render events data
     let eventList = eventsData.map((eventItem)=>{
        return(
            <div key = {eventItem.event_id} className='col-md col-sm-6 all-events' >
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
      );
        });
        return (
              //return events cards
        <div className='events-card row'>{eventList}</div>
          );
    }
}
 
export default EventsSectionRender;