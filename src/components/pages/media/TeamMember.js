import React from 'react'

const TeamMember = ({ name, role, type, description, src }) => {
  return (
    <div className='columns'>
      <div className='column is-3'>
        <div className='media-content'>
          <figure className='content'>
            <img className='center-img' src={src}/>
          </figure>
        </div>
      </div>
      <div className='column is-9'>
        <div className='container'>
          <p className='bold'>{name}. {role}</p><p> {description}</p>
        </div>
      </div>
    </div>
  )
}

TeamMember.propTypes = {
  src: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  role: React.PropTypes.string
}

export default TeamMember
