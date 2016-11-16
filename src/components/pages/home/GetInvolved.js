import React from 'react'
import JobPosting from './../media/contact/JobPosting.js'
import jobs from './../media/contact/jobs.js'

const GetInvolved = React.createClass({
  getInitialState () {
    return {
      jobPostings: []
    }
  },
  componentDidMount () {
    const jobPostings = jobs.map(function (job, index) {
      return (
        <JobPosting
          title={job.title}
          description={job.description}
          address={job.address}
          key={index}
        />
      )
    })
    this.setState({jobPostings: jobPostings})
  },
  render () {
    return (
      <section id='get-involved' className='section'>
        <div className='container heading is-text-centered'>
          <h1 className='title'>Get Involved</h1>
          {this.state.jobPostings}
        </div>
      </section>
    )
  }
})

export default GetInvolved
