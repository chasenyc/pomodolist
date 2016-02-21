import React from 'react';
import ReactDOM from 'react-dom';

import {
  Router, Route, browserHistory,
  IndexRoute, IndexRedirect
} from 'react-router';

import App from './components/app';
import SignIn from './components/user/signin';

var routes = (
  <Router history={browserHistory}>
    <Route name="app" path="/" component={App}>
      <Route path="signin" component={ SignIn } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  console.log('loaded.');
  ReactDOM.render(routes, document.getElementById('content'));
});
