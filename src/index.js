import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import MoviesGrid from './components/MoviesGrid';
import Movie from './components/Movie';
import NoMatch from './components/NoMatch';

import './styles/index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Root = () => (
    <Router>
      <div>
        <Main>
          <Switch>
            <Route exact path="/movies/:id" component={Movie} />
            <Route exact path="/movies" component={MoviesGrid} />
            <Route component={NoMatch}/>
          </Switch>
        </Main>
      </div>
    </Router>
  )



ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
