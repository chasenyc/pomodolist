"use strict";
import React from 'react';
import { Link, browserHistory } from 'react-router';
import TodoAPIUtils from '../../utils/todo_api_utils';

export default class TodoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <li className="todo-list-item">
        <button
          onClick={ () => {
            TodoAPIUtils.markTodo(this.props.todo.id, true)
          } }
          className="icon todo-item-done"></button>
        {this.props.todo.title}
        <button className="icon todo-item-delete"></button>
      </li>
    )
  }

}
