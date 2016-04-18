import React from 'react'

const Tab = React.createClass({
  handleClick (e) {
    e.preventDefault()
    this.props.handleClick()
  },
  render () {
    return (
      <li key={this.props.id} className={this.props.isActive ? 'is-active' : null}>
        <a onClick={this.handleClick}>
          <i className={this.props.class} id={this.props.slug}></i>
        </a>
      </li>
    )
  }
})

const Tabs = React.createClass({
  handleClick (tab) {
    this.props.changeTab(tab)
  },
  render () {
    return (
      <ul>
         {this.props.tabList.map((tab) => {
           return (
             <Tab
               key={tab.id}
               handleClick={this.handleClick.bind(this, tab)}
               class={tab.class}
               id={tab.slug}
               isActive={(this.props.activeIndex === tab.id)}
             />
           )
         })}
      </ul>
    )
  }
})

export default Tabs
