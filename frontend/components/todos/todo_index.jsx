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
        <h3>{ this._title() }</h3>
        <ul className="todo-list">
          { this._todoItems() }
        </ul>
      </div>
    )
  }

  _todoItems() {
    var key = (this.props.view ? 'm' : 'k')
    return this.props.todos.map((todo) => {
      if (todo.completed === this.props.view) {
        return (
          <TodoIndexItem
            key={ key + todo.id }
            todo={ todo }
            mark={ !this.props.view } />
        )
      }
    });
  }

  _title() {
    if (this.props.view) {
      return 'Completed Todos'
    } else {
      return 'Active Todos'
    }
  }
}
