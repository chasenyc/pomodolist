"use strict";
import React from 'react';
import { Link, browserHistory } from 'react-router';

import CurrentUserStore from '../../../stores/current_user_store';
import TodoIndex from '../../todos/todo_index';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {
    this._isUserLoggedIn();
  }

  render() {

    return (
      <div className="home">
        <h1>Home</h1>
        <TodoIndex {...this.state} {...this.props} />
      </div>
    )
  }

  _isUserLoggedIn() {
    if (!CurrentUserStore.isLoggedIn()) {
      browserHistory.push('/signin');
    }
  }
}
