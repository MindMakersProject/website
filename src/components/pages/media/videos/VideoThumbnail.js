import React from 'react'

const VideoThumbnail = ({ title, description, src, thumbnail, index, handleClick }) => {

	const styles = {
	  imageGridItem: {
	    display: 'inline-block',
	    width: '25%',
	    boxSizing: 'border-box',
	    float: 'left',
	    paddingRight: '25px',
	    textAlign: 'center'
	  },
	  imageWrapper: {
	    position: 'relative',
	    width: '100%',
	    paddingBottom: '100%',
	    backgroundImage: `url(${thumbnail})`,
	    backgroundSize: 'cover',
	    backgroundColor: 'none',
	    backgroundPosition: 'center center',
	    backgroundRepeat: 'no-repeat'
	  }
	}

	return (
      <div className='imageGridItem' style={styles.imageGridItem} onClick={handleClick}>
        <a>
          <div className='imageWrapper' style={styles.imageWrapper}></div>
          { title }
        </a>
      </div>
	)
}

VideoThumbnail.propTypes = {
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  index: React.PropTypes.number,
  padding: React.PropTypes.number,
  description: React.PropTypes.string
}

export default VideoThumbnail
