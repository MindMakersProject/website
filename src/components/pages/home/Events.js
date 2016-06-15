import React from 'react'

const Events = React.createClass({
  render () {
    return (
      <section id='events' className='section'>
        <div className='container'>
          <div className='heading is-text-centered'>
            <h1 className='title'>Events</h1>
            <br/>
            <p>
              Stay up on what's in the making with Mind Makers.
            </p>
            <p>
              Check out our media section for photos, videos & materials to help you host your own event.
            </p>
          </div>
          <br/>
          <div className='card is-fullwidth'>
            <figure className='card-image is-square'>
              <img className='center-img' src={require('./../../../assets/images/Javabots.png')} alt=''/>
            </figure>
            <div className='card-content'>
              <div className='media'>
                <div className='media-content'>
                  <p className='title is-6 is-text-centered'><strong>Mind Makers Meet the Girl Scouts</strong></p>
                </div>
              </div>
              <div className='content'>
                <p>
                  The Mind Makers team hosted an electronics workshop with the Rock ‘n Roll Robots, two Girl Scouts robotics teams, to teach them how to make RF controlled LED bows, just like the ones the MM team made together back in December! We stocked up with tool kits and supplies to share going forward so that they can pay the knowledge forward. Check out our photos and video of this girl-empowering afternoon, as well as the full workshop documentation, which can be used by anyone (including YOU!) to host such a workshop like this for the rest of your community.   
                </p>
                <br/>
                <p className='subtitle is-6'>Downtown Los Angeles</p>
                <strong>
                  <small>February 13th, 2016</small>
                </strong>
              </div>
            </div>
          </div>
          <div className='card is-fullwidth'>
            <figure className='card-image is-square'>
              <img className='center-img' src={require('./../../../assets/images/nasa-image.jpg')} alt=''/>
            </figure>
            <div className='card-content'>
              <div className='media'>
                <div className='media-content'>
                  <p className='title is-6 is-text-centered'><strong>NASA Space Apps Women in Data Bootcamp 2016</strong></p>
                </div>
              </div>
              <div className='content'>
                <p>
                  The Space Apps Women in Data Bootcamp was a full day of speakers mixed with workshop exercises that served as a platform to foster an environment where women feel welcomed to participate in the subsequent NASA Space Apps Challenge, a huge hackathon which happened at around 200 locations worldwide. In honor of NASA’s Women in Data initiative and our electronics roots, we taught a short lesson on the binary number system and converting letters to binary using an ASCII table. This was followed by a lesson in soldering! Attendees translated their initials into binary and then lit up their binary code into two bytes of LEDs in a transparent circuit designed by us.
                </p>
                <br/>
                <p className='subtitle is-6'>Pasadena, CA</p>
                <strong>
                  <small>April 22, 2016</small>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
})

export default Events
