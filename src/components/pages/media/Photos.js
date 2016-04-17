import React from 'react'
import PictureGrid from './PictureGrid.js'
import $ from 'jQuery'

const Photos = React.createClass({
  getInitialState(){
    return { columns: 5, padding: 5, images: [], loading: true };
  },
  componentDidMount: function(){
     
     var self = this;
     // Url for last 15 instagram posts
     var url = 'https://api.instagram.com/v1/users/self/media/recent?access_token=2317542864.6011d7b.381ecd89b7e04f3cbffba992ff822d1f&count=15&callback=?';

     $.getJSON(url, function(result){
         if(!result || !result.data || !result.data.length){
             return;
         }
         var images = result.data.map(function(p){
             return { 
                 id: p.id, 
                 url: p.link, 
                 src: p.images.low_resolution.url, 
                 title: p.caption ? p.caption.text : ''
             };
         });

         // Update the component's state. This will trigger a render.
         // adding images and setting kiadubg ti d=fakse

         self.setState({ images: images, loading: false });

     });

 },
  render(){
    return (
       <div className="image is-16x9">
          <PictureGrid
            imagesArray={this.state.images}
            columns={this.state.columns}
            padding={this.state.padding} 
          />
         <br/>
         <br/>
         <div className='media-content'>
          <p className='title is-6 is-text-centered'><strong>
            Follow us on Instagram <a href='http://www.instagram.com/mindmakersproject'>@MINDMAKERSPROJECT </a>
          </strong></p>
         </div>
         <br/>
       </div>
    )
  }
});

export default Photos