import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

// import movies from './data/movies';
import { addVisibility } from './actions/actionCreators';
import { editVisibility } from './actions/actionCreators';
import { fetchMovies } from './actions/actionCreators';

const defaultState = {
  movies: { isFetching: false, items: [] },
  addForm: addVisibility.DONT_SHOW_FORM,
  editForm: editVisibility.DONT_SHOW
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

// const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
    // loggerMiddleware // neat middleware that logs actions
  )
  // defaultState
  // enhancers
);

console.log(store.getState());
// console.log(store.dispatch(fetchMovies));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
