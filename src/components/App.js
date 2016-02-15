import React from 'react';
import Home from './pages/Home.js';

const App = React.createClass({
  render () {
    return (
      <div>
        <div className="container is-fluid">
          <div className="notification">
            This website is under <strong>active development.</strong>
          </div>
          <Home />
        </div>
      </div>
    )
  }
});

export default App;
