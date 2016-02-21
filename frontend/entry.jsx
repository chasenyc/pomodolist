import React from 'react';
import { render } from 'react-dom';

import {
  Router, Route, browserHistory,
  IndexRoute, IndexRedirect
} from 'react-router';

import App from './components/app';
import Dashboard from './components/layout/dashboard/dashboard';
import SignIn from './components/user/signin';

var routes = (
  <Router history={ browserHistory }>
    <Route name="app" path="/" component={ App }>
      <IndexRoute component={ Dashboard } />
      <Route path="signin" component={ SignIn } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  render(routes, document.getElementById('content'));
});
