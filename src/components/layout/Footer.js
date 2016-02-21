import React  from 'react';

const Footer = React.createClass({
  render () {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content is-centered">
            <hr/>
            <p>
              <strong>&copy;Mind Makers 2016</strong>
            </p>
          </div>
        </div>
      </footer>
    )
  }
});

export default Footer;
