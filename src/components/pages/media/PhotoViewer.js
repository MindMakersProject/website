import React from 'react'
import VideoThumbnail from './videos/VideoThumbnail.js'
import ImageGallery from 'react-image-gallery';
import images from './team.js'

// Videos go here
const photoContent = [
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/Electronic%20Bow:Tie%20&%20Social%20Impact%20Making/bowGroup.jpg?raw=true',
    name: 'Electronic Bow/Tie & Social Impact Making',
    set: ['IMG_0439.jpg', 'IMG_0449.jpg', 'IMG_0486crop.jpg', 'IMG_0539.jpg', 'IMG_0540.jpg', 'IMG_0541.jpg', 'IMG_0602.jpg', 'IMG_0604.jpg', 'IMG_0624.jpg', 'IMG_0679.jpg', 'IMG_0687.jpg', 'IMG_0694edit.jpg', 'IMG_0698.jpg', 'bowGroup.jpg', 'groupPicBowsBestReduced.jpg'],
    url: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/Electronic%20Bow:Tie%20%26%20Social%20Impact%20Making',
    index: 0
  },
  {
  	src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/NASA%20Space%20Apps%20Women%20in%20Data%20Bootcamp/bootcampPic5.jpg?raw=true',
  	name: 'NASA Space Apps Women in Data Bootcamp',
  	set: ['bootcampPic.JPG', 'bootcampPic1.jpg', 'bootcampPic10.JPG', 'bootcampPic11.JPG', 'bootcampPic12.JPG', 'bootcampPic2.jpg', 'bootcampPic3.jpg', 'bootcampPic4.jpg', 'bootcampPic5.jpg', 'bootcampPic6.JPG', 'bootcampPic7.JPG', 'bootcampPic8.JPG', 'bootcampPic9.JPG'],
  	url: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/NASA%20Space%20Apps%20Women%20in%20Data%20Bootcamp',
  	index: 1
  }
]

const PhotoViewer = React.createClass({
  getInitialState () {
    return { images: [], photos: [], activeIndex: null, lightboxIsOpen: false, loading: true }
  },
  componentDidMount () {
  	this.setState({ images: photoContent, loading: false })
  },
  handleClick(e) {
  	this.setState({ activeIndex: e.index })
  	let photos = photoContent[e.index].set.map((photo) => {
  		return {
  			original: photoContent[e.index].url + '/' + photo + '?raw=true',
  			thumbnail: photoContent[e.index].url + '/' + photo + '?raw=true'
  		}
  	})
  	this.setState({ photos : photos })
  },
  render () {
    var self = this;
    const videoNodes = photoContent.map((image) => {
      return (
      	<div>
          <VideoThumbnail
            title={image.name}
            src={image.src}
            key={image.name}
            handleClick={self.handleClick.bind(this, image)}
          />
        </div>
      )
    })

    let lightbox = <ImageGallery
        items={this.state.photos}
        slideInterval={2000}
      />

    return (
      <div>
        { this.state.photos.length > 0 && lightbox }
        <div className='video-bar'>
        { videoNodes }
        </div>
        <br/>
      </div>
    )
  }
})

export default PhotoViewer
