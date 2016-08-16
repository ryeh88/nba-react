'use strict';

import React from 'react';

require('styles//Header.css');
require('normalize.css/normalize.css');
require('styles/App.css');

let nbaLogo = require('../images/nba-logo.jpg');

export default class Header extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={nbaLogo} alt="Nba"></img>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

Header.displayName = 'Header';

// Uncomment properties you need
// Header.propTypes = {};
// Header.defaultProps = {};


