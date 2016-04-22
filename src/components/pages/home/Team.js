import React from 'react'
import TeamMember from './../media/TeamMember.js'
import team from './../media/team.js'

const Team = React.createClass({
  render () {
    const teams = team.filter(function(member) { return member.type === 'Team'})
    const sponsors = team.filter(function(member) { return member.type === 'Sponsor'})
    const volunteers = team.filter((member) => { return member.type === 'Volunteer Coordinator'})
    const techLeaders = team.filter((member) => { return member.type === 'Technical Leader'})
    const designers = team.filter((member) => { return member.type === 'Designer'})
    const codePathers = team.filter((member) => { return member.type === 'Codepath'})
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
    const volunteerNodes = volunteers.map(function(arr, index) {
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
    const codepathNodes = codePathers.map(function(arr, index) {
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
    const techNodes = techLeaders.map(function(arr, index) {
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
    const designerNodes = designers.map(function(arr, index) {
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
            <h1 className='title is-3'>Meet Our <strong>Team</strong></h1>
            {teamNodes}
            <h1 className='title is-3'>Our Sponsors</h1>
            {sponsorNodes}
            <h1 className='title is-3'>Volunteer Coordinators</h1>
            {volunteerNodes}
            <h1 className='title is-3'>Technical Leaders</h1>
            {techNodes}
            <h1 className='title is-3'>Codepath</h1>
            <h2 className='subtitle'>CodePath is proud to partner with Mind Makers to develop a world class curriculum aligned with current industry standards. They see this as an opportunity to inspire new and diverse groups of professionals to pursue careers in engineering while creating real paths to proficiency.</h2>
            {codepathNodes}
            <h1 className='title is-3'>Designers</h1>
            {designerNodes}
          </div>
          <br/>
      </div>
    </section>
      )
  }
})

export default Team
