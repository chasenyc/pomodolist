"use strict";
import React from 'react';
import { Link, browserHistory } from 'react-router';

import CurrentUserStore from '../../../stores/current_user_store';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {
    this._isUserLoggedIn();
    console.log(this.props);
  }

  render() {

    return (
      <div className="home">
        <h1>Home</h1>

      </div>
    )
  }

  _isUserLoggedIn() {
    if (!CurrentUserStore.isLoggedIn()) {
      browserHistory.push('/signin');
    }
  }
}
