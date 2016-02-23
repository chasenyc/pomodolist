"use strict";
import React from 'react';
import { Link, browserHistory } from 'react-router';

import CurrentUserStore from '../../../stores/current_user_store';
import TodoIndex from '../../todos/todo_index';
import TodoForm from '../../todos/todo_form';
import AddBox from '../../todos/add_box';

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
        <AddBox {...this.state} {...this.props} />
        <TodoIndex key={'active'} {...this.state} {...this.props} view={ false }/>
        <TodoIndex key={'completed'} {...this.state} {...this.props} view={ true }/>
      </div>
    )
  }

  _isUserLoggedIn() {
    if (!CurrentUserStore.isLoggedIn()) {
      browserHistory.push('/signin');
    }
  }
}
