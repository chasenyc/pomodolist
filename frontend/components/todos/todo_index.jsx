"use strict";
import React from 'react';
import { Link, browserHistory } from 'react-router';

import TodoIndexItem from './todo_index_item';

export default class TodoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="home-box">
        <h3>Todo Items</h3>
        <ul>
          { this._todoItems() }
        </ul>
      </div>
    )
  }

  _todoItems() {
    return this.props.todos.map((todo) => {
      return <TodoIndexItem key={ 'k' + todo.id } todo={ todo } />
    });
  }
}
