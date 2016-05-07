import React from 'react'
import VideoEmbed from './VideoEmbed.js'

// Videos go here
const videoContent = [
  {
    service: 'vimeo',
    video: 'https://vimeo.com/149455112'
  }
]

const Videos = React.createClass({
  getInitialState () {
    // Presently we only have 1 video, when we have thumbnails and more videos,
    // this will specify what video is currently being played
    return { videoIndex: 0 }
  },
  render () {
    const { service, video } = videoContent[this.state.videoIndex]
    return (
      <div>
        <div className='video-container'>
          <VideoEmbed
            className='image is-16by9'
            service={service}
            video={video}
          />
        </div>
        <br/>
        <p>
          We are all about the power of teamwork and knowledge-sharing! The Mind Makers motivation and project plan was announced at the December 18th TEDxLA Salon event and the founding members took the opportunity to show by example how new skills can be passed from engineers to anyone willing to learn. To launch the initiative, the team made magic by learning how to lay out and solder circuits to make RF controlled LED bows and bow ties. Check out the video to see them exchange skills and discuss why they care about making mindful matters, matter. 
        </p>
      </div>
    )
  }
})

export default Videos
