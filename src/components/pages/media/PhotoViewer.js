import React from 'react'
import VideoThumbnail from './videos/VideoThumbnail.js'
import ImageGallery from 'react-image-gallery';
import images from './team.js'

// Videos go here
const photoContent = [
  {
    src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/Electronic%20Bow:Tie%20&%20Social%20Impact%20Making/bowGroup.jpg?raw=true',
    name: 'Electronic Bow/Tie & Social Impact Making',
    description: 'The Mind Makers team hosted an electronics workshop on Valentine\'s Day weekend to teach two Girl Scouts robotics teams, the Javabots and the Honor Roll, how to make remote controlled LED bows and bow ties! Want to host an engineering workshop? Take some tips from our team to make it a success!',
    set: ['IMG_0439.jpg', 'IMG_0449.jpg', 'IMG_0486crop.jpg', 'IMG_0539.jpg', 'IMG_0540.jpg', 'IMG_0541.jpg', 'IMG_0602.jpg', 'IMG_0604.jpg', 'IMG_0624.jpg', 'IMG_0679.jpg', 'IMG_0687.jpg', 'IMG_0694edit.jpg', 'IMG_0698.jpg', 'bowGroup.jpg', 'groupPicBowsBestReduced.jpg'],
    url: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/Electronic%20Bow:Tie%20%26%20Social%20Impact%20Making',
    index: 0
  },
  {
  	src: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/NASA%20Space%20Apps%20Women%20in%20Data%20Bootcamp/bootcampPic5.jpg?raw=true',
  	name: 'NASA Space Apps Women in Data Bootcamp',
    description: 'We are all about the power of teamwork and knowledge-sharing! The Mind Makers motivation and project plan was announced at the December 18th TEDxLA Salon event and the founding members took the opportunity to show by example how new skills can be passed from engineers to anyone willing to learn. To launch the initiative, the team made magic by learning how to lay out and solder circuits to make RF controlled LED bows and bow ties. Check out the video to see them exchange skills and discuss why they care about making mindful matters, matter.',
  	set: ['bootcampPic.JPG', 'bootcampPic1.jpg', 'bootcampPic10.JPG', 'bootcampPic11.JPG', 'bootcampPic12.JPG', 'bootcampPic2.jpg', 'bootcampPic3.jpg', 'bootcampPic4.jpg', 'bootcampPic5.jpg', 'bootcampPic6.JPG', 'bootcampPic7.JPG', 'bootcampPic8.JPG', 'bootcampPic9.JPG'],
  	url: 'https://github.com/MindMakersProject/website-BE/blob/master/photos/NASA%20Space%20Apps%20Women%20in%20Data%20Bootcamp',
  	index: 1
  }
]

const PhotoViewer = React.createClass({
  getInitialState () {
    return { images: [], photos: [], activeIndex: 0, lightboxIsOpen: false, loading: true }
  },
  componentDidMount () {
  	this.setState({ activeIndex: 0, images: photoContent, loading: false })
    this.handleClick({ index: 0 })
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
            key={image.index}
            handleClick={self.handleClick.bind(this, image)}
          />
        </div>
      )
    })

    let lightbox = <ImageGallery
        items={this.state.photos}
        lazyLoad={true}
        slideInterval={2000}
      />

    return (
      <div>
        { this.state.photos.length > 0 && lightbox }
        <p>{ photoContent[this.state.activeIndex].description }</p>
        <div className='video-bar'>
        { videoNodes }
        </div>
        <br/>
      </div>
    )
  }
})

export default PhotoViewer
