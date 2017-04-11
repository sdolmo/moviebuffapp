import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './movies';
import addForm from './addForm';
import editForm from './editForm';

const rootReducer = combineReducers({ editForm, addForm, movies, routing: routerReducer });

export default rootReducer;
