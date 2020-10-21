import React, { Component } from 'react';
import '../EventsSection/EventsSection.css';
import UpComingEventsSection from './UpCamingEventSection/UpCamingEventsSection';
import HiddenEventsSection from './HiddenEventSection/HiddenEventsSection';
import LastEventsSection from './LastEventSection/LastEventsSection';
const EventsPage = () => {
    return ( //all Event Page
        <div className='events-section container'>
                   {/**SHOW ALL CAMING EVENTS */}
                    <UpComingEventsSection/>
                   {/**SHOW ALL LAST EVENTS */}
                    <LastEventsSection/>
                   {/**SHOW ALL EVENTS */}
                    <HiddenEventsSection/>
        </div>
     );
}
 
export default EventsPage; 