import React from 'react';
import ReactDOM from 'react-dom';

import {
  Router, Route, browserHistory,
  IndexRoute, IndexRedirect
} from 'react-router';

import App from './components/app';

var routes = (
  <Router history={browserHistory}>
    <Route name="app" path="/" component={App}>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(routes, document.getElementById('content'));
});
