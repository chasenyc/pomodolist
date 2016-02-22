import React from 'react';
import { Link, browserHistory } from 'react-router';

import AppConstants from '../../constants/app_constants';
import UserAPIUtils from '../../utils/user_api_utils';
import CurrentUserStore from '../../stores/current_user_store';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConf: ''
    };
  }

  componentWillReceiveProps() {
    this._isUserLoggedIn();
  }

  submit(e) {
    e.preventDefault();
    UserAPIUtils.createUser({
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
          <h1 className="user-form-header">Register</h1>
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
              <label>Password Confirmation:</label>
              <input type="password"
                name="password-conf"
                placeholder="password confirmation"
                onChange={
                  (e) => { this.setState( {passwordConf: e.target.value} ) }
                } />
              <div
                 className={this._isPasswordConfirmationValid()}>
                    passwords do not match.
              </div>
              <p>
                <span></span>
              </p>
              <div className="btn-holder">
                <button className="btn large">Register</button>
              </div>
              Or if you already have an account&nbsp;
              <Link to={"/signin"} className="display-link">sign in.</Link>
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

  _isPasswordConfirmationValid() {
    if (this.state.password ===
        this.state.passwordConf) {
        return 'input-validation';
    }
    return 'input-validation visible';
  }
}
