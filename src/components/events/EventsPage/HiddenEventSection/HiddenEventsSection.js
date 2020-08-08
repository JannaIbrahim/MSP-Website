import React, { Component } from 'react';
import HiddenEvents from './HiddenEvents'
class HiddenEventsSection extends Component {
    state = {//all data for hidden events
       hiddenEvents : [
        {//first event card
            "event_id": 7,
            "event_image": '../images/eventImage.jpeg',
            "event_title": "Mega Event",
            "event_date": {'the_date':'30 sep 2019'},
            "event_location":{
              'the_location':'Anwar Al Mofti, Al Manteqah Al Oula, Nasr City, Cairo Governorate'}
        }, 
        {//second event card
            "event_id": 8,
            "event_image": '../images/eventImage.jpeg',
            "event_title": "Mega Event",
            "event_date": {'the_date':'30 sep 2019'},
            "event_location": {
              'the_location':'Anwar Al Mofti, Al Manteqah Al Oula, Nasr City, Cairo Governorate'}
        },
        {//third event card
            "event_id": 9,
            "event_image": '../images/eventImage.jpeg',
            "event_title": "Mega Event",
            "event_date": {'the_date':'30 sep 2019'},
            "event_location": {
              'the_location':'Anwar Al Mofti, Al Manteqah Al Oula, Nasr City, Cairo Governorate'}
        }
        
    ],
    showHiddenEvent: true
 }
 //function to update the state when click show link
 handelclick =(e)=>{
     e.preventDefault();
     this.setState({
         showHiddenEvent: false
     })
 }
    render() { 
        const {showHiddenEvent} =this.state;
        return (
        <div>
           <h2 className='events-header'><a href='/hidden' onClick={this.handelclick}>Show More</a></h2>
           {/**if showHiddenEvent == false show hidden section else null */}
            {showHiddenEvent == false? <HiddenEvents hiddenEventsData = {this.state.hiddenEvents}/>: ''}
        </div>

          );
    }
}
 
export default HiddenEventsSection;