import React from 'react'
// TODO: Add scroll-to easing animation, make navigation sticky (since it is a SPA)
import logo from './../../assets/mm-logo.png'

const Navbar = React.createClass({
  getInitialState () {
    return { collapsed: false }
  },
  render () {
    return (
      <nav className='navbar'>
        <p className='navbar-item is-text-centered'>
          <a className='link is-info' href='#home'>Home</a>
        </p>
        <p className='navbar-item is-text-centered'>
          <a className='link is-info' href='#about'>Mission</a>
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
