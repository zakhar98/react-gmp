import {combineReducers} from 'redux';
import moviesListReducer from './movies-list_reducer.js';
import modalsReducer from './modals_reducer.js';

export default combineReducers({
  moviesList: moviesListReducer,
  modals: modalsReducer,
})
