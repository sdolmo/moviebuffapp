import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import MoviesGrid from './components/MoviesGrid';
import Movie from './components/Movie';
import NoMatch from './components/NoMatch';

import './css/App.css';

import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


const Root = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/movies" component={MoviesGrid}/>
        <Route path="/movies/:id" component={Movie} />
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>
)



ReactDOM.render(
  Root ,
  document.getElementById('root')
);
