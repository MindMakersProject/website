import React from 'react';

// BASE LAYOUT
import Navbar from './layout/Navbar.js';
import Footer from './layout/Footer.js';
//
// PAGES
import Home from './pages/Home.js';

const App = React.createClass({
  render () {
    return (
      <div>
        <div className="container is-fluid">
          <div className="notification">
            This website is under <strong>active development.</strong>
          </div>
          <Navbar />
          <Home />
          <Footer />
        </div>
      </div>
    )
  }
});

export default App;
