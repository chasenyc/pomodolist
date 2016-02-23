"use strict";
import React from 'react';
import { Link, browserHistory } from 'react-router';
import TodoAPIUtils from '../../utils/todo_api_utils';

import TodoForm from './todo_form';

export default class AddBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="home-box">
        <TodoForm {...this.state} {...this.props} />
        <div className="home-box-divider"></div>
      </div>
    )
  }
}
