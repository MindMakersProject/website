import React from 'react'
import videos from './videos.js'
import VideoThumbnail from './VideoThumbnail.js'
import $ from 'jquery'

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
    return { videoIndex: 0, videos: [], loading: true }
  },
  componentDidMount () {
  	const self = this
  	this.setState({ videos: videos, loading: false })
  },
  render () {
    const videoNodes = this.state.videos.map((arr) => {
      return (
      	<div class= "video-bar">
          <VideoThumbnail
            title={arr.title}
            description={arr.description}
            src={arr.src}
            index={arr.index}
            key={arr.index}
            thumbnail={arr.thumbnail}
          />
        </div>
      )
    })
    return (
      <div>
        <div className='video-bar'>
        { videoNodes }
        </div>
        <br/>
      </div>
    )
  }
})

export default Videos
