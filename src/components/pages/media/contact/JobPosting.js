import React from 'react'

const JobPosting = ({ title, description, address }) => {
  var addressLink= `mailto:${address}`;
  return (
    <div>
      <p className='subtitle is-4'>{ title }</p>
      <p>{ description }</p>
        <address>
          <a href={addressLink}>{ address }</a>
        </address>
        <br />
    </div>
  )
}

export default JobPosting
