import React from 'react'
import fixedNav from './../../previous/js/fixedNav.js'
import logo from './../../assets/mm-logo.png'

const Navbar = React.createClass({
  getInitialState () {
    return { collapsed: false }
  },
  componentDidMount () {
    fixedNav.stick()
  },
  render () {
    return (
      <nav className='navbar'>
        <p className='navbar-item is-text-centered'>
          <a data-scroll className='link is-info' href='#home'>Home</a>
        </p>
        <p className='navbar-item is-text-centered'>
          <a data-scroll className='link is-info' href='#mission'>About</a>
        </p>
        <p className='navbar-item is-text-centered'>
          <a data-scroll className='link is-info' href='#team'>Team</a>
        </p>
        <p className='navbar-item is-text-centered logo'>
          <img className='nav-logo' src={logo} alt='Mind Makers' />
        </p>
        <p className='navbar-item is-text-centered'>
          <a data-scroll className='link is-info' href='#media'>Media</a>
        </p>
        <p className='navbar-item is-text-centered'>
          <a data-scroll className='link is-info' href='#events'>Events</a>
        </p>
        <p className='navbar-item is-text-centered'>
          <a data-scroll className='link is-info' href='#contact'>Contact</a>
        </p>
      </nav>
    )
  }
})

export default Navbar
