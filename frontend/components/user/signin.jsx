import React from 'react';
import { Link, browserHistory } from 'react-router';

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

  componentWillReceiveProps() {
    this._isUserLoggedIn();
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
          <div className="user-form-body">
            <p className="flash-notice">{this.state.flash}</p>
            <div className="user-form-inputs">
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
              <div className="btn-holder">
                <button
                  onClick={ (e) => {
                      e.preventDefault();
                      SessionAPIUtils.login({
                        username: 'mark',
                        password: 'reallySecure'
                      });
                    }
                  }
                  className="btn large">View Demo Account</button>
              </div>
              Or if you do not have an account&nbsp;
              <Link to={"/register"} className="display-link">register.</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }

  _isUserLoggedIn() {
    if (CurrentUserStore.isLoggedIn()) {
      browserHistory.push('/');
    }
  }
}
