import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth from "./Auth";
import { Router, Route, browserHistory } from 'react-router'
import './index.css';

/*
      <Route path="/:id/profile" component={Competitions.list}/>
      <Route path="/verify" component={Competitions.list}/>
      <Route path="/logout" component={Competitions.list}/>      
*/

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/auth" component={Auth.Gateway}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
