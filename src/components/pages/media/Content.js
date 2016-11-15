import React from 'react'
import Videos from './videos/VideoBar.js'
import Documents from './documents/Documents.js'
import Photos from './photos/PhotoViewer.js'

const Content = React.createClass({
  render () {
    return (
      <div className='content'>

        {this.props.activeIndex === 0
        ? <Videos /> : null}

        {this.props.activeIndex === 1
        ? <Photos /> : null}

        {this.props.activeIndex === 2
        ? <Documents /> : null}

      </div>
    )
  }
})

export default Content
