import React from 'react'
import Particles from './../../../previous/js/main.js'

const Hero = React.createClass({
  componentDidMount () {
    Particles.load()
  },
  render () {
    return (
      <section id='hero' className='hero is-fullheight'>
        <canvas id='mm-canvas'></canvas>
        <div className='hero-content'>
          <div className='container'>
            <h1 className='subtitle is-1'>
              MIND MAKERS
            </h1>
            <h2 className='subtitle'>
              <strong>Make Up Your Mind</strong>
            </h2>
            <a className='button is-primary is-outlined is-large' data-scroll href='#get-involved'>GET INVOLVED</a>
          </div>
        </div>
      </section>
    )
  }
})

export default Hero
