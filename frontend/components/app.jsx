"use strict";
import React from 'react';

import Header from './layout/header/header';
import CurrentUserStore from '../stores/current_user_store';
import SessionAPIUtils from '../utils/session_api_utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getStateFromStore();
  }

  getStateFromStore() {
    return {
      user: CurrentUserStore.currentUser(),
      isLoggedIn: CurrentUserStore.isLoggedIn()
    };
  }

  componentDidMount() {
    this._userListener = e => this.setState( this.getStateFromStore());
    CurrentUserStore.addChangeListener(this._userListener);
    SessionAPIUtils.fetchCurrentUser();
  }

  componentWillUnmount() {
    CurrentUserStore.addChangeListener(this._userListener);
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
