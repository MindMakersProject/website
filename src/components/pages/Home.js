import React from 'react'

// HOME PAGE LAYOUT
import Hero from './home/Hero.js'
import About from './home/About.js'
import Team from './home/Team.js'
import Events from './home/Events.js'
import Media from './home/Media.js'
import Contact from './home/Contact.js'

const Home = React.createClass({
  render () {
    return (
      <section id='home'>
        <Hero />
        <About />
        <Team />
        <Media />
        <Contact />
        <Events />
      </section>
    )
  }
})

export default Home
