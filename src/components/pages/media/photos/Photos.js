import React from 'react'
import PictureGrid from './PictureGrid.js'
import $ from 'jquery'

const Photos = React.createClass({
  getInitialState () {
    return { columns: 5, padding: 5, images: [], loading: true }
  },
  componentWillMount () {
    this.updateColumns()
  },
  componentDidMount () {
    const self = this
    // Url for last 15 instagram posts
    const url = 'https://api.instagram.com/v1/users/self/media/recent?access_token=2317542864.6011d7b.381ecd89b7e04f3cbffba992ff822d1f&count=15&callback=?'

    $.getJSON(url, function (result) {
      if (!result || !result.data || !result.data.length) {
        return
      }
      const images = result.data.map(function (p) {
        return {
          id: p.id,
          url: p.link,
          src: p.images.low_resolution.url,
          title: p.caption ? p.caption.text : ''
        }
      })
      // Update the component's state. This will trigger a render.
      // adding images and setting loading to false
      self.setState({ images: images, loading: false })
      window.addEventListener('resize', this.updateColumns)
    })
  },
  componentWillUnmount () {
    window.removeEventListener('resize', this.updateColumns)
  },
  updateColumns () {
    const self = this
    let w = window
    let d = document
    let documentElement = d.documentElement
    let body = d.getElementsByTagName('body')[0]
    let width = w.innerWidth || documentElement.clientWidth || body.clientWidth

    if (width < 580) self.setState({columns: 3})
  },
  render () {
    return (
      <div className='media-content'>
        <div className='image is-16x9'>
          <PictureGrid
            imagesArray={this.state.images}
            columns={this.state.columns}
            padding={this.state.padding}
          />
          <br/>
        </div>
      </div>
    )
  }
})

export default Photos
