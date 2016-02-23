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
      <li
        className={ this._liStyle() }>
        <button
          onClick={ () => {
            TodoAPIUtils.markTodo(
              this.props.todo.id,
              this.props.mark
            ).then(TodoAPIUtils.fetchTodos())
          } }
          className="icon todo-item-done"></button>
        {this.props.todo.pom_total}
        <div title='completed pomodoros' className='pom-icon'></div>
        <span title={this.props.todo.title}>
          {this.props.todo.title}
        </span>
        <button
          className="icon todo-item-delete"></button>
      </li>
    )
  }

  _liStyle() {
    if (!this.props.mark) {
      return 'todo-list-item complete'
    } else {
      return 'todo-list-item'
    }
  }
}
