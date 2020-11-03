import React from 'react'
import ReactPlayer from 'react-player';
import './Slider.css'
const Slider =()=> {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/4fJV7w2YDqw'
            width='100%'
            height='100%'
            controls
          />
        </div>
      )
    }
  ;
export default Slider;