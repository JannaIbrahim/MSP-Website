import React from 'react'
import ReactPlayer from 'react-player';
import './Slider.css'
const Slider =()=> {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/embed/4fJV7w2YDqw?controls=0&showinfo=0'
            width='100%'
            height='100%'
            controls = 'false'
            muted = 'true'
            playing = 'true'
            loop = 'true'
            

          />
        </div>
      )
    }
  ;
export default Slider;