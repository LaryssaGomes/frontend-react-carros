import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import Login from './pages/login';
import Registry from './pages/registry';

import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/registry" component={Registry} />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

