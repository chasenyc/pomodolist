"use strict";
import React from 'react';
import { Link } from 'react-router';


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
            <Link to={"/"}>
              <div className="logo"></div>
            </Link>
          </div>
        </nav>
      </header>
    )
  }
}
