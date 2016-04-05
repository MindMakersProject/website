import React from 'react'

const Team = React.createClass({
  render () {
    return (
      <section id='team' className='section'>
        <div className='container'>
          <div className='heading is-text-centered'>
            <h1 className='title'>Team</h1>
            <h2 className='subtitle'>
              Section <strong>description.</strong>
            </h2>
          </div>
          <br/>
          <article className='media'>
            <figure className='media-left'>
              <p className='image is-250x250'>
                <img src='http://static1.squarespace.com/static/566879201c12100a72ccd165/t/566a268140667acc25b08e9e/1449797279473/?format=300w'/>
              </p>
            </figure>
            <div className='media-content'>
              <div className='content'>
                <p>
                  <strong>Michelle Easter. Founder.</strong>
                  <br/>
                  After working as a fashion model for years in the US, Europe, Asia and the Middle East, Michelle started college from scratch at the age of 26. She finished at the top of her class with a degree in Mechanical Engineering and now works as a Mechatronics Engineer for NASA's Jet Propulsion Laboratory. She believes strongly in the role of mentorship in providing a platform for success, and is passionate about sharing her education to empower people from all backgrounds. Michelle cares deeply about outreach and exposing children to atypical and minority role models with technical backgrounds.
                </p>
              </div>
            </div>
          </article>
          <br/>
          <article className='media'>
            <figure className='media-left'>
              <p className='image is-250x250'>
                <img src='http://static1.squarespace.com/static/566879201c12100a72ccd165/t/566b3c85cbced62f3780cb42/1449868422119/?format=300w'/>
              </p>
            </figure>
            <div className='media-content'>
              <div className='content'>
                <p>
                  <strong>Isis Anchalee. Advisor.</strong>
                  <br/>
                  After working as a fashion model for years in the US, Europe, Asia and the Middle East, Michelle started college from scratch at the age of 26. She finished at the top of her class with a degree in Mechanical Engineering and now works as a Mechatronics Engineer for NASA's Jet Propulsion Laboratory. She believes strongly in the role of mentorship in providing a platform for success, and is passionate about sharing her education to empower people from all backgrounds. Michelle cares deeply about outreach and exposing children to atypical and minority role models with technical backgrounds.
                </p>
              </div>
            </div>
          </article>
          <br/>
          <hr/>
          <p className='subtitle is-4 is-text-centered'>SPONSORS</p>
          <br/>
          <article className='media'>
            <figure className='media-left'>
              <p className='image is-250x250'>
                <img src='http://static1.squarespace.com/static/566879201c12100a72ccd165/t/566b67fe69a91af72b2b61b0/1449879551325/?format=300w'/>
              </p>
            </figure>
            <div className='media-content'>
              <div className='content'>
                <p>
                  <strong>Eric Espinosa. Advisor &amp Sponsor.</strong>
                  <br/>
                  After working as a fashion model for years in the US, Europe, Asia and the Middle East, Michelle started college from scratch at the age of 26. She finished at the top of her class with a degree in Mechanical Engineering and now works as a Mechatronics Engineer for NASA's Jet Propulsion Laboratory. She believes strongly in the role of mentorship in providing a platform for success, and is passionate about sharing her education to empower people from all backgrounds. Michelle cares deeply about outreach and exposing children to atypical and minority role models with technical backgrounds.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    )
  }
})

export default Team
