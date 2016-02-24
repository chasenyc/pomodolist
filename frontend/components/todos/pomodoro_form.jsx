"use strict";
import React from 'react';
import { Link, browserHistory } from 'react-router';
import TodoAPIUtils from '../../utils/todo_api_utils';
import TodoStore from '../../stores/todo_store';

export default class PomodoroForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pomodoro: 'none',
      time: 0,
      interval: '',
      todo: ''
    };
  }

  handleClick() {
    if (this.state.todo === '') { return; }
    switch(this.state.pomodoro) {
      case 'none':
        this.setState({
          pomodoro: 'pomo',
          time: 15000,
          interval: setInterval(this.updateTime.bind(this), 50)
        })
        break;
      case 'pomo':
        this.stopTimer();
        break;
      case 'break':
        this.stopTimer();
        break;
    }
  }

  stopTimer() {
    clearInterval(this.state.interval);
    this.props.setWidth(0);
    this.setState({
      pomodoro: 'none',
      time: 0
    })
  }

  updateTime() {
    var newTime = this.state.time - 50;
    if (newTime < 0) {
      switch(this.state.pomodoro) {
        case 'pomo':
          var todo = parseInt(this.state.todo);
          var amount = parseInt(TodoStore.pomTotal(todo)) + 1;
          TodoAPIUtils.addPomodo(todo, amount);
          this.stopTimer();
          break;
        case 'break':

          break;
      }
    }
    this.setState({
      time: newTime
    })
    var percent = 100 - ((newTime / 15000) * 100);
    this.props.setWidth(percent);
  }

  renderTime() {
    if (this.state.time <= 0) {
      return 'pomodoro inactive';
    }
    var ms = this.state.time
    var seconds = Math.floor((ms / 1000) % 60).toString();
    var minutes = Math.floor((ms / (1000 * 60)) % 60).toString();
    if (seconds.length === 1) {
      seconds = "0" + seconds;
    }
    if (minutes.length === 1) {
      minutes = "0" + minutes;
    }
    return minutes + ':' + seconds;
  }

  selectChange(e) {
    this.setState({
      todo: e.target.value
    });
  }

  render() {

    return (
      <div className="pomodoro-form">
        <label>Choose a todo:
          <select
            disabled={this.state.time <= 0 ? false : true }
            defaultValue=""
            onChange={ this.selectChange.bind(this) }
            className="pomodoro-select">
            <option value="" disabled>select a todo</option>
            { this._activeTodos() }
          </select>
        </label>
        <div className="pomodoro-form-timer">
          { this.renderTime() }
        </div>
        <button
          onClick={ this.handleClick.bind(this) }
          className={ this._buttonClass() }>
          { this._buttonText() }
        </button>
      </div>
    )
  }

  _buttonClass() {
    switch(this.state.pomodoro) {
      case 'none':
        return 'pomodoro-form-button start';
        break;
      case 'pomo':
        return 'pomodoro-form-button pomo';
        break;
      case 'break':
        return 'pomodoro-form-button break';
        break;
    }
  }

  _buttonText() {
    switch(this.state.pomodoro) {
      case 'none':
        return 'Start Pomodoro';
        break;
      case 'pomo':
        return 'Quit Pomodoro';
        break;
      case 'break':
        return 'Finish Break';
        break;
    }
  }

  _activeTodos() {
    return this.props.todos.map(function (todo) {
      if (todo.completed === false) {
        return (
          <option
            key={ todo.id }
            value={ todo.id }>
            { todo.title }
          </option>
        );
      }
    });
  }
}
