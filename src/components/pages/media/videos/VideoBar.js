import React from 'react'
import videos from './videos.js'
import VideoThumbnail from './VideoThumbnail.js'
import VideoEmbed from './VideoEmbed.js'
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
    return { videoIndex: 0, videos: videos, loading: true, nowPlaying: true }
  },
  componentDidMount () {
  	this.setState({ videos: videos, loading: false })
  },
  handleClick(e) {
    if (!this.state.nowPlaying) {
      this.setState({ videoIndex: e.index, nowPlaying: true })
    } else {
      this.setState({ videoIndex: e.index})
    }
  },
  render () {
    var self = this;
    const videoNodes = this.state.videos.map((arr) => {
      return (
      	<div>
          <VideoThumbnail
            title={arr.title}
            description={arr.description}
            src={arr.src}
            index={arr.index}
            key={`video-${arr.index}`}
            thumbnail={arr.thumbnail}
            handleClick={self.handleClick.bind(this, arr)}
          />
        </div>
      )
    })

    let videoWindow = null;
    if (this.state.nowPlaying) {
      videoWindow =
        <div className='video-container'>
        <VideoEmbed
          className='image is-16by9'
          service={'vimeo'}
          video={this.state.videos[this.state.videoIndex].src}
        />
      </div>
    }

    return (
      <div>
        { videoWindow }
        <p>{ this.state.nowPlaying && this.state.videos[this.state.videoIndex].description}</p>
        <div className='video-bar'>
        { videoNodes }
        </div>
        <br/>
      </div>
    )
  }
})

export default Videos
