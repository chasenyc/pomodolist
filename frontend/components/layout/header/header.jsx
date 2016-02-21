"use strict";
import React from 'react';



export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <header className="header">
        <nav className="header-nav">
          <div className="header-logo-container">
            <a href="/">
              <div className="logo"></div>
            </a>
          </div>
        </nav>
      </header>
    )
  }
}
