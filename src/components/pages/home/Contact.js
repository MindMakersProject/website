import React from 'react'

const Contact = React.createClass({
  getInitialState () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      submitted: false
    }
  },
  handleFirstNameChange: function (e) {
    this.setState({firstName: e.target.value})
  },
  handleLastNameChange: function (e) {
    this.setState({lastName: e.target.value})
  },
  handleEmailChange: function (e) {
    this.setState({email: e.target.value})
  },
  handleSubjectChange: function (e) {
    this.setState({subject: e.target.value})
  },
  handleMessageChange: function (e) {
    this.setState({message: e.target.value})
  },
  handleSubmit (e) {
    e.preventDefault()

    const payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    }
    window.analytics.identify(payload)

    this.setState({ submitted: true }); 
  },
  render () {
    return (
      <section id='contact' className='section'>
        <div className='container'>
          <div className='heading is-text-centered'>
            <h1 className='title'>Contact</h1>
            <div className='social-bar'>
              <a href='https://www.instagram.com/mindmakersproject'><i className='fa fa-instagram fa-3x'></i></a>
              <a href='https://www.facebook.com/MindMakersProject/'><i className='fa fa-facebook-official fa-3x'></i></a>
              <a href='https://twitter.com/mindmakersproj'><i className='fa fa-twitter-square fa-3x'></i></a>
            </div>
              <br/>
              <p>If you are interested in sponsoring, participating in or just learning more about this powerful initiative, please submit the form below to sign up to receive updates or information.</p>
              <br/>
              <p>Your skill set and passion might be just what we need. Please check out our volunteer opportunity listings by clicking to <a data-scroll className='link is-info' href="#get-involved">Get Involved</a>.</p>
              <br/>
              <p><strong>Sponsors</strong> If you support the ideas that Mind Makers promotes and you want to sponsor this initiative, please reach out and let us collaborate. You will help make STEM education and mentorship accessible and inspiring to people of all ages from all walks of life, and to paint a new picture of engineers and engineering. As a 501(c)(3) organization, your contribution to Mind Makers will also be tax deductible.</p>
              <br/>
              <p className='bold'>Any additional comments, inquiries or support are also welcome. We will all thrive with your support.</p>
          </div>
          <br/>
            <div>
            <div className='columns'>
              <p className='control column is-half'>
                <input
                  className='input'
                  type='text'
                  placeholder='First Name'
                  value={this.state.firstName}
                  onChange={this.handleFirstNameChange}
                />
              </p>
              <p className='control column is-half'>
                <input
                  className='input'
                  type='text'
                  placeholder='Last Name'
                  value={this.state.lastName}
                  onChange={this.handleLastNameChange}
                />
              </p>
            </div>
            <p className='control'>
              <input
                className='input'
                type='email'
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </p>
            <p className='control'>
              <input
                className='input'
                type='text'
                placeholder='Subject'
                value={this.state.subject}
                onChange={this.handleSubjectChange}
              />
            </p>
            <p className='control'>
              <textarea
                className='textarea'
                placeholder='Message'
                value={this.state.message}
                onChange={this.handleMessageChange}
              ></textarea>
            </p>
            <p className='control'>
              <button className={ this.state.submitted ? 'button is-submitted' : 'button is-primary' } onClick={ this.handleSubmit }>Submit</button>
            </p>
            { this.state.submitted ? <strong> Thanks, we'll be in touch shortly!</strong> : null }
            </div>
        </div>
      </section>
    )
  }
})

export default Contact
