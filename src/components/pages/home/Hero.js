import React from 'react'

const Hero = React.createClass({
  render () {
    return (
      <section id='hero' className='hero'>
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
