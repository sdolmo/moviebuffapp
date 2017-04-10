import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import MoviesGrid from './components/MoviesGrid';
import Movie from './components/Movie';
import NoMatch from './components/NoMatch';

import './styles/index.css';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


const Root = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={Main} />
      <Route path="/movies" component={MoviesGrid}/>
      <Route path="/movies/:id" component={Movie} />
      <Route path="*" component={NoMatch}/>
    </Router>
  </Provider>
  )



ReactDOM.render(
  Root ,
  document.getElementById('root')
);
