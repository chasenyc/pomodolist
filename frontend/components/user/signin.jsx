import React from 'react';

import AppConstants from '../../constants/app_constants';
import SessionAPIUtils from '../../utils/session_api_utils';
import CurrentUserStore from '../../stores/current_user_store';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  submit(e) {
    e.preventDefault();
    SessionAPIUtils.login({
      username: this.state.username,
      password: this.state.password
    });
  }

  render() {

    return (
      <div className="user-sign-in">
        <form
          className="sign-in-form"
          onSubmit={ this.submit.bind(this) }>
          <h1 className="user-form-header">Sign In</h1>
          <p className="flash-notice">{this.state.flash}</p>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={ this.state.username }
              onChange={
                (e) => { this.setState( {username: e.target.value} ) }
              } />
            <label>Password:</label>
            <input type="password"
              name="password"
              placeholder="password"
              value={ this.state.password }
              onChange={
                (e) => { this.setState( {password: e.target.value} ) }
              } />
            <p>
              <span></span>
            </p>
            <div className="btn-holder">
              <button className="btn large">Sign In</button>
            </div>
            Or if you do not have an account&nbsp;
            <a href="#/signup" className="display-link">sign up.</a>
        </form>
      </div>
    )
  }
}
