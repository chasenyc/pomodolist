"use strict";
import React from 'react';
import { Link, browserHistory } from 'react-router';
import TodoAPIUtils from '../../utils/todo_api_utils';

export default class PomodoroForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="pomodoro-form">
        <label>Choose a todo:
          <select className="pomodoro-select">
            { this._activeTodos() }
          </select>
        </label>
      </div>
    )
  }

  _activeTodos() {
    return this.props.todos.map(function (todo) {
      if (todo.completed === false) {
        return (<option key={ todo.id }>{ todo.title }</option>);
      }
    });
  }
}
