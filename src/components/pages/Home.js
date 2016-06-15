import React from 'react'

// HOME PAGE LAYOUT
import Hero from './home/Hero.js'
import Mission from './home/Mission.js'
import Team from './home/Team.js'
import Events from './home/Events.js'
import Media from './home/Media.js'
import Contact from './home/Contact.js'

const Home = React.createClass({
  render () {
    return (
      <section id='home'>
        <Hero />
        <Mission />
        <Team />
        <Media />
        <Events />
        <Contact />
      </section>
    )
  }
})

export default Home
