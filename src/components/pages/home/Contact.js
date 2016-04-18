import React from 'react'

const Contact = React.createClass({
  getInitialState () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
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
  },
  render () {
    return (
      <section id='contact' className='section'>
        <div className='container'>
          <div className='heading is-text-centered'>
            <h1 className='title'>Contact</h1>
          </div>
          <br/>
          <p>
            If you are interested in sponsoring or participating in this powerful initiative, please submit the form below to sign up or ask questions. We will thrive with your support.
          </p>
          <br/>
          <p>
            <strong>Volunteers:</strong> Please provide a brief description of your background, skills and interests.
          </p>
          <br/>
          <p>
            <strong>Sponsors:</strong> If you support the ideas that Mind Makers promotes so deeply that you want to help sponsor this initiative, please reach out and let us collaborate. You will be helping to provide and encourage STEM education and mentorship for people of all ages from diverse and unexpected backgrounds, and to paint a new picture of engineers and engineering.
          </p>
          <br/>
          <br/>
          <p className='subtitle is-4'>ENGINEERING EDUCATOR AND/OR MENTOR:</p>
          <p>
            If you have technical knowledge and want to share your experience by lesson planning, teaching or workshop mentoring for introductory software, mechanical and electrical engineering concepts:
          </p>
          <br/>
          <hr/>
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
            <button className='button is-primary' onClick={this.handleSubmit}>Submit</button>
          </p>
        </div>
      </section>
    )
  }
})

export default Contact
