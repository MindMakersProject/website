import React from 'react'
import $ from 'jquery'

const Media = React.createClass({
  handleClick: function(){
    $("li").click(function() {
      $("li").removeClass("is-active");
      $(this).addClass("is-active");
    });
  },
  render () {
    return (
      <section id='media' className='section'>
        <div className='container'>
          <div className='heading is-text-centered'>
            <h1 className='title'>Media</h1>
            <h2 className='subtitle'>
              Section <strong>description.</strong>
            </h2>
          </div>
          <br/>
          <div className='tabs is-toggle is-text-centered is-fullwidth'>

            <ul>
              <li onClick={this.handleClick} className='is-active' id='film'><a><i className='fa fa-film'></i> Videos</a></li>
              <li onClick={this.handleClick} ><a><i className='fa fa-camera'></i> Photos</a></li>
              <li onClick={this.handleClick} ><a><i className='fa fa-file-text-o'></i> Documents</a></li>
            </ul>
          </div>
          <p className='image is-16by9'>
            <img src='http://placehold.it/960x540'/>
          </p>
          <br/>
          <p>
            We are all about the power of teamwork and knowledge-sharing! The Mind Makers motivation and project plan was announced at the December 18th TEDxLA Salon event and the founding members took the opportunity to show by example how new skills can be passed from engineers to anyone willing to learn. To launch the initiative, the team made magic by learning how to lay out and solder circuits to make RF controlled LED bows and bow ties. Check out the video to see them exchange skills and discuss why they care about making mindful matters, matter.
          </p>
          <br/>
          <p>
            Stay tuned to see Michelle's talk, where their skills are revealed to the unsuspecting but now believing TEDx audience!
          </p>
        </div>
      </section>
    )
  }
})

export default Media
