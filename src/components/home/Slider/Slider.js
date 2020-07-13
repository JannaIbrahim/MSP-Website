import React from 'react';
import ReactPlayer from 'react-player';

function videoPlayer () {
    return (
      <div className='videoPlayer'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=JJY1u1F9jhs&t=20s'
          controls
          onReady={() => console.log('onReady callback')}
          onStart={() => console.log('onStart callback')}
          onPause={() => console.log('onPause callback')}
          onEnded={() => console.log('onEnded callback')}
          onError={() => console.log('onError callback')}
        />
      </div>
    )
  }







export default videoPlayer;