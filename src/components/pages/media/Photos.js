import React from 'react'

const Photos = React.createClass({
  render(){
    return (
       <div>
         <p className='image is-16by9'>
           <img src='https://placeimg.com/960/540/any'/>
         </p>
         <br/>
         <p>
           Follow us on Instagram @MINDMAKERSPROJECT
         </p>
         <br/>
       </div>

    )
  }
});

export default Photos