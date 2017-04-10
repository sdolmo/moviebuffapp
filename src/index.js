import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import MoviesGrid from './components/MoviesGrid';
import Movie from './components/Movie';
import NoMatch from './components/NoMatch';

import './styles/index.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';


const Root = () => (
    <Router history={browserHistory}>
      <Route path="/movies" component={MoviesGrid} />
        {/* <IndexRoute component={}></IndexRoute> */}
        <Route path="/movies/:id" component={Movie} />
      <Route path="*" component={NoMatch}/>
    </Router>
  )



ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
