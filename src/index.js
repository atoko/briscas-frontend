import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import App from './App';
import Auth from "./Auth";
import Home from "./Home";

import './index.css';

/*
      <Route path="/:id/profile" component={Competitions.list}/>
      <Route path="/verify" component={Competitions.list}/>
*/

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="/gateway" component={Auth.Gateway}/>
      <Route path="/profile" component={Auth.Member}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
