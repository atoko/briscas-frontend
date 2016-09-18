import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './App/store';

import App from './App';
import Auth from "./Auth";
import Home from "./Home";

import './index.css';

/*
      <Route path="/:id/profile" component={Competitions.list}/>
      <Route path="/verify" component={Competitions.list}/>
*/
let store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Home}/>
        <Route path="/gateway" component={Auth.Gateway}/>
        <Route path="/profile" component={Auth.Member}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
