"use strict";
import React from 'react';
import { Link, browserHistory } from 'react-router';
import TodoAPIUtils from '../../utils/todo_api_utils';

export default class PomodoroForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pomodoro: 'none',
      time: 0,
      interval: ''
    };
  }

  handleClick() {
    switch(this.state.pomodoro) {
      case 'none':
        this.setState({
          pomodoro: 'pomo',
          time: 1500000,
          interval: setInterval(this.updateTime.bind(this), 1000)
        })
        break;
      case 'pomo':
        this.setState({
          pomodoro: 'none',
          time: 0
        })
        clearInterval(this.state.interval);
        break;
      case 'break':
        this.setState({
          pomodoro: 'none',
          time: 0
        })
        clearInterval(this.state.interval);
        break;
    }
  }

  updateTime() {
    var newTime = this.state.time - 1000;
    if (newTime < 0) {
      switch(this.state.pomodoro) {
        case 'pomo':
          
          break;
        case 'break':

          break;
      }
    }
    this.setState({
      time: newTime
    })
  }

  renderTime() {
    if (this.state.time === 0) {
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

  render() {

    return (
      <div className="pomodoro-form">
        <label>Choose a todo:
          <select className="pomodoro-select">
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
        return (<option key={ todo.id }>{ todo.title }</option>);
      }
    });
  }
}
