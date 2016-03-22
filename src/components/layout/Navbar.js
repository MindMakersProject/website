import React from 'react'
//
import logo from './../../assets/mm-logo.png'

const Navbar = React.createClass({
  render () {
    return (
      <nav className='navbar'>
        <p className='navbar-item is-text-centered'>
          <a className='link is-info' href='#top'>Home</a>
        </p>
        <p className='navbar-item is-text-centered'>
          <a className='link is-info' href='#mission'>Mission</a>
        </p>
        <p className='navbar-item is-text-centered'>
          <a className='link is-info' href='#team'>Team</a>
        </p>
        <p className='navbar-item is-text-centered'>
          <img className='nav-logo' src={logo} alt='Mind Makers' />
        </p>
        <p className='navbar-item is-text-centered'>
          <a className='link is-info' href='#media'>Media</a>
        </p>
        <p className='navbar-item is-text-centered'>
          <a className='link is-info' href='#events'>Events</a>
        </p>
        <p className='navbar-item is-text-centered'>
          <a className='link is-info' href='#contact'>Contact</a>
        </p>
      </nav>
    )
  }
})

export default Navbar
