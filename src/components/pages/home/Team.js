import React from 'react'
import TeamMember from './../media/TeamMember.js'
import team from './../media/team.js'

const Team = React.createClass({
  render () {
    const teams = team.filter(function (member) { return member.type === 'Team' })
    const sponsors = team.filter(function (member) { return member.type === 'Sponsor' })
    const volunteers = team.filter((member) => { return member.type === 'Volunteer Coordinator' })
    const techLeaders = team.filter((member) => { return member.type === 'Technical Leader' })
    const designers = team.filter((member) => { return member.type === 'Designer' })
    const codePathers = team.filter((member) => { return member.type === 'Codepath' })
    const teamNodes = teams.map((arr, index) => {
      return (
        <TeamMember
          key={index}
          src={arr.src}
          name={arr.name}
          role={arr.role}
          type={arr.type}
          description={arr.description}
        />
      )
    })
    const sponsorNodes = sponsors.map((arr, index) => {
      return (
        <TeamMember
          key={index}
          src={arr.src}
          name={arr.name}
          role={arr.role}
          type={arr.type}
          description={arr.description}
        />
      )
    })
    const volunteerNodes = volunteers.map((arr, index) => {
      return (
        <TeamMember
          key={index}
          src={arr.src}
          name={arr.name}
          role={arr.role}
          type={arr.type}
          description={arr.description}
        />
      )
    })
    const codepathNodes = codePathers.map((arr, index) => {
      return (
        <TeamMember
          key={index}
          src={arr.src}
          name={arr.name}
          role={arr.role}
          type={arr.type}
          description={arr.description}
        />
      )
    })
    const techNodes = techLeaders.map((arr, index) => {
      return (
        <TeamMember
          key={index}
          src={arr.src}
          name={arr.name}
          role={arr.role}
          type={arr.type}
          description={arr.description}
        />
      )
    })
    const designerNodes = designers.map((arr, index) => {
      return (
        <TeamMember
          key={index}
          src={arr.src}
          name={arr.name}
          role={arr.role}
          type={arr.type}
          description={arr.description}
        />
      )
    })

    return (
      <section id='team' className='section'>
        <div className='container'>
          <div className='heading is-text-centered'>
            <br />
            <h1 className='title'>Our <strong>Team</strong></h1>
            <br />
            <p>Mind Makers is made possible thanks to an international collaboration between engineers, educators and artists of all sorts, joined by a common vision.</p>
          </div>
          {teamNodes}
          <br />
          <div className='heading is-text-centered'>
            <h1 className='title'>Our Sponsors</h1>
          </div>
          {sponsorNodes}
          <br />
          <div className='heading is-text-centered'>
            <h1 className='title'>Volunteer Coordinators</h1>
          </div>
          {volunteerNodes}
          <br />
          <div className='heading is-text-centered'>
            <h1 className='title'>Technical Leaders</h1>
          </div>
          {techNodes}
          <br />
          <div className='heading is-text-centered'>
            <h1 className='title'>Codepath</h1>
            <p>CodePath is proud to partner with Mind Makers to develop a world class curriculum aligned with current industry standards. They see this as an opportunity to inspire new and diverse groups of professionals to pursue careers in engineering while creating real paths to proficiency.</p>
          </div>
          <br />
          {codepathNodes}
          <br />
          <div className='heading is-text-centered'>
            <h1 className='title'>Designers</h1>
          </div>
          {designerNodes}
          <br/>
        </div>
      </section>
      )
  }
})

export default Team
