import React from 'react'

const JobPosting = ({ title, description, address }) => {
  var addressLink= `mailto:${address}`;
  return (
    <div>
      <p><strong>{ title }</strong></p>
      <p>{ description }</p>
        <address>
          <a href={addressLink}>{ address }</a>
        </address>
        <br />
    </div>
  )
}

export default JobPosting