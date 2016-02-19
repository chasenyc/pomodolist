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
          <div id="logo">pomodolist</div>
          
        </nav>
      </header>
    )
  }
}
