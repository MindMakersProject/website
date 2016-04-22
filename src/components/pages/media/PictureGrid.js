import React from 'react'
import Photo from './Photo'

const PictureGrid = ({ imagesArray, padding, columns }) => {
  const width = Math.floor(100 / columns)

  const imageNodes = imagesArray.map((arr, index) => {
    return (
      <Photo
        key={index}
        url={arr.src}
        link={arr.url}
        title={arr.title}
        width={width}
        padding={padding}
      />
    )
  })
  return (
    <div className='imageGrid'>
      {imageNodes}
    </div>
  )
}

PictureGrid.propTypes = {
  imagesArray: React.PropTypes.array.isRequired,
  columns: React.PropTypes.number,
  padding: React.PropTypes.number
}

PictureGrid.defaultProps = {
  imagesArray: [],
  padding: 0,
  columns: 5
}

export default PictureGrid
