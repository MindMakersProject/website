import React from 'react'
import Videos from './Videos.js'
import Documents from './Documents.js'
import Photos from './Photos.js'

const Content = React.createClass({
  render(){
    return (
       <div className="content">Hello Werld
       	{this.props.activeIndex === 0 ?
                <Videos />
            	:null}

        	{this.props.activeIndex === 1 ?
                <Photos />
            	:null}

       	 {this.props.activeIndex === 2 ?
                <Documents /> :null}
       </div>
    )
  }
});

export default Content