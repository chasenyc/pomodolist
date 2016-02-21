"use strict";
import React from 'react';
import { Link, browserHistory } from 'react-router';
import SessionAPIUtils from '../../../utils/session_api_utils';

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
          {this.props.isLoggedIn}
          {this._rightSideIcons()}
        </nav>
      </header>
    )
  }

  _rightSideIcons() {
    if (this.props.isLoggedIn === true) {
      return (
        <div>
          <button
            className="nav-button right-side"
            onClick={ () => { SessionAPIUtils.logout() } }>
            Log out</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link
            className="nav-button right-side button-accent"
            to={"/register"}>Register</Link>
          <Link
            className="nav-button right-side"
            to={"/signin"}>Login</Link>
        </div>
      )
    }
  }
}
