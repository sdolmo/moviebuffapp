import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './movies';
import addForm from './addForm';

const rootReducer = combineReducers({ addForm, movies, routing: routerReducer });

export default rootReducer;
