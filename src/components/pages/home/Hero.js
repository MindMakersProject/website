import React from 'react'
import GSAP from 'gsap'
import RAF from './../../../previous/js/rAF.js'
import Particles from './../../../previous/js/main.js'

const Hero = React.createClass({
  componentDidMount() {
    Particles.load();
  },
  render () {
    return (
      <section id='hero' className='hero'>
        <canvas id="mm-canvas"></canvas>
        <div className='hero-content'>
          <div className='container'>
            <h1 className='title'>
              THE MIND MAKERS PROJECT
            </h1>
            <h2 className='subtitle'>
              <strong>Making Mindful Matters, Matter.</strong>
            </h2>
            <a className='button is-primary is-outlined is-large' href='#contact'>GET INVOLVED</a>
          </div>
        </div>
      </section>
    )
  }
})

export default Hero
