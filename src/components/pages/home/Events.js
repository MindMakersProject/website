import React from 'react'

const Events = React.createClass({
  render () {
    return (
      <section id='events' className='section'>
        <div className='container'>
          <div className='heading is-text-centered'>
            <h1 className='title'>Events</h1>
            <h2 className='subtitle'>
              Section <strong>description.</strong>
            </h2>
          </div>
          <br/>
          <div className='card'>
            <figure className='card-image is-square'>
              <img src='http://placehold.it/300x300' alt=''/>
                </figure>
                <div className='card-content'>
                  <div className='media'>
                    <div className='media-content'>
                      <p className='title is-6 is-text-centered'><strong>Mind Makers Meet the Girl Scouts</strong></p>
                    </div>
                  </div>
                  <div className='content'>
                    <p>
                      The Mind Makers team will host their first electronics workshop with the Javabots, a Girl Scouts robotics team, to teach them how to make RF controlled LED bows, just like the ones the MM team made together back in December! We are stocking them up with tool kits and supplies so that they can pay it forward and host their own workshops to teach tons of other teens the same thing. Stay tuned for photos and video of this girl-empowering afternoon, as well as the full workshop documentation, which can be used by anyone (including YOU!) to host such a workshop for the rest of the community.
                    </p>
                    <br/>
                    <p className='subtitle is-6'>@javabots</p>
                <strong>
                  <small>February 13th, 2016</small>
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
