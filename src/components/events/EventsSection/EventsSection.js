import React, { Component } from 'react';
import './EventsSection.css';
import EventsSectionData from './EventsSectionData';
const EventsSection = () => {
    
        return ( 
            //section to show events card and it's header
            <section className='events-section container'>
                <h2 className='events-header'>EVENTS</h2>
                <EventsSectionData/>
             </section>
        );
    
}
 
export default EventsSection;