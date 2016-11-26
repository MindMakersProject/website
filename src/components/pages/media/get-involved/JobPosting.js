import React from 'react'

const JobPosting = ({ title, image, description, address }) => {
  var addressLink= `mailto:${address}`;

  return (
    <div className='columns'>
      <div className='column is-3'>
        <div className='media-content'>
          <figure className='content'>
            <img className='center-img' src={ image }/>
          </figure>
        </div>
      </div>
      <div className='column is-9'>
        <div className='container'>
          <p className='bold'>{ title }</p>
          <p> { description }</p>
          <address>
            <a href={ addressLink }>{ address }</a>
          </address>
        </div>
      </div>
    </div>
  )
}

export default JobPosting