import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

// import movies from './data/movies';
import { addVisibility } from './actions/actionCreators';
import { editVisibility } from './actions/actionCreators';

const defaultState = {
  movies: { isFetching: false, items: [] },
  addForm: addVisibility.DONT_SHOW_FORM,
  editForm: addVisibility.DONT_SHOW
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, defaultState, enhancers);

console.log(store.getState());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
