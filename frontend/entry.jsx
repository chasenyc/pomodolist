import React from 'react';
import { render } from 'react-dom';

import {
  Router, Route, browserHistory,
  IndexRoute, IndexRedirect
} from 'react-router';

import App from './components/app';
import Home from './components/layout/home/home';
import SignIn from './components/user/signin';
import Register from './components/user/register';

var routes = (
  <Router history={ browserHistory }>
    <Route name="app" path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="signin" component={ SignIn } />
      <Route path="register" component={ Register } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  render(routes, document.getElementById('content'));
});
