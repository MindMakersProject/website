import React from 'react'
import Tabs from './../../layout/Tabs.js'
import Content from './../media/Content.js'

const tabList = [
    {'id': 0, 'name': 'Videos', 'class': 'fa fa-film', 'slug': 'film'},
    {'id': 1, 'name': 'Photos', 'class': 'fa fa-camera', 'slug': 'photos'},
    {'id': 2, 'name': 'Documents', 'class': 'fa fa-file-text-o', 'slug': 'documents'}
]

const Media = React.createClass({
  getInitialState () {
    return {
      tabs: tabList,
      activeIndex: 0
    }
  },

  changeTab (tab) {
    this.setState({ activeIndex: tab.id })
  },

  render () {
    return (
      <section id='media' className='section'>
        <div className='container'>
          <div className='heading is-text-centered'>
            <h1 className='title'>Media</h1>
          </div>
          <br/>
          <div className='tabs is-toggle is-centered is-fullwidth'>
            <Tabs
              activeIndex={this.state.activeIndex}
              changeTab={this.changeTab}
              tabList={tabList}
            />
          </div>
          <Content
            className='media-content'
            activeIndex={this.state.activeIndex}
          />
        </div>
      </section>
    )
  }
})

export default Media
