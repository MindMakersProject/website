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
          <h2 className='subtitle'><strong>We're building a one-of-a-kind, open-source curriculum with virtual content and collaborative hardware building modules. Our team is diverse, building content that ties together neuroscience, robotics, anatomy, data visualization, system networking and philosophy. Join our team!</strong></h2>
          <h2 className='subtitle is-4'>Curriculum Development</h2>
          <p>Great for creatives & technical types worldwide.</p>
          <br/>
          {this.state.curriculumJobs}
          <h2 className='subtitle is-4'>Workshop Team</h2>
          <p>Makers & movers in the LA area and abroad.</p>
          <br/>
          {this.state.workshopJobs}
        </div>
      </section>
    )
  }
})

export default GetInvolved
