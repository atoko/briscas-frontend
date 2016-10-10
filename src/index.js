import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './App/store';

import App from './App';
import Auth from "./Auth";
import Home from "./Home";
import Brisca from "./Brisca";

import './index.css';

let store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Home}/>
        <Route path="/gateway" component={Auth.Gateway}/>
        <Route path="/profile" component={Auth.Member}/>
        <Route path="/brisca/:gameId" component={Brisca.Board}/>
        <Route path="/catalog" component={Brisca.Catalog}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
