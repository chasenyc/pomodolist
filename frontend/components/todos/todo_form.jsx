"use strict";
import React from 'react';
import { Link, browserHistory } from 'react-router';
import TodoAPIUtils from '../../utils/todo_api_utils';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      pom_estimate: ''
    };
  }

  clearState() {
    this.setState({
      title: '',
      pom_estimate: '',
    });
  }

  submit(e) {
    e.preventDefault();
    TodoAPIUtils.createTodo({
      title: this.state.title,
      pom_estimate: this.state.pom_estimate,
      completed: false,
      pom_total: 0
    }).then(this.clearState());
  }

  render() {

    return(
      <div className="todo-form-box">
        <form
          className="todo-form"
          onSubmit={ this.submit.bind(this) }>
          <h3>Add Todo</h3>
          <div className="todo-form-body">
            <label>Title:
              <input
                type="text"
                name="title"
                placeholder="hire alex"
                value={ this.state.title }
                onChange={
                  (e) => { this.setState({title: e.target.value}) }
                } />
            </label>
            <label>Estimated Poms Required:
              <input
                type="number"
                name="pom_estimate"
                placeholder="3"
                value={ this.state.pom_estimate }
                onChange={
                  (e) => {
                    this.setState({pom_estimate: e.target.value});
                  }
                } />
            </label>
            <button className="btn large add">Add</button>
          </div>
        </form>
      </div>
    )
  }
}
