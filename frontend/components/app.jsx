"use strict";
import React from 'react';

import Header from './layout/header/header'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {
    console.log('test');
  }

  render() {
    return (
      <div>
        <Header {...this.state} />
        {this._children()}
      </div>
    )
  }

  _children() {
    return React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, this.state);
    }, this);
  }
}
