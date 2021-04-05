import actionTypes from './actionTypes.js';
import ApiService from '../../services/api_service.js';

function fetchMoviesStart(params) {
  return {
    type: actionTypes.FETCH_MOVIES_START,
    payload: params,
  };
}

function fetchMoviesSuccess(movies) {
  return {
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
}

function fetchMoviesFailure(error) {
  return {
    type: actionTypes.FETCH_MOVIES_FAILURE,
    payload: { error }
  };
}

export function fetchMovies(params = {}) {
  return async (dispatch) => {
    dispatch(fetchMoviesStart(params));

    try {
      const movies = await ApiService.fetchMovies(params);

      dispatch(fetchMoviesSuccess(movies));
    } catch (error) {
      dispatch(fetchMoviesFailure(error));
    }
  };
}

function deleteMovieStart() {
  return {
    type: actionTypes.DELETE_MOVIE_START,
  };
}

function deleteMovieSuccess() {
  return {
    type: actionTypes.DELETE_MOVIE_SUCCESS,
  };
}

function deleteMovieFailure(error) {
  return {
    type: actionTypes.DELETE_MOVIE_FAILURE,
    payload: { error }
  };
}

export function deleteMovie(movieId) {
  return async (dispatch) => {
    dispatch(deleteMovieStart());

    try {
      await ApiService.deleteMovie(movieId);

      dispatch(deleteMovieSuccess());
    } catch (error) {
      dispatch(deleteMovieFailure(error));
    }
  };
}

function editMovieStart() {
  return {
    type: actionTypes.EDIT_MOVIE_START,
  };
}

function editMovieSuccess() {
  return {
    type: actionTypes.EDIT_MOVIE_SUCCESS,
  };
}

function editMovieFailure(error) {
  return {
    type: actionTypes.EDIT_MOVIE_FAILURE,
    payload: { error }
  };
}

export function editMovie(movie) {
  return async (dispatch) => {
    dispatch(editMovieStart());

    try {
      await ApiService.editMovie(movie);

      dispatch(editMovieSuccess());
    } catch (error) {
      dispatch(editMovieFailure(error));
    }
  };
}

function createMovieStart() {
  return {
    type: actionTypes.CREATE_MOVIE_START,
  };
}

function createMovieSuccess() {
  return {
    type: actionTypes.CREATE_MOVIE_SUCCESS,
  };
}

function createMovieFailure(error) {
  return {
    type: actionTypes.CREATE_MOVIE_FAILURE,
    payload: { error }
  };
}

export function createMovie(movie) {
  return async (dispatch) => {
    dispatch(createMovieStart());

    try {
      await ApiService.createMovie(movie);

      dispatch(createMovieSuccess());
    } catch (error) {
      dispatch(createMovieFailure(error));
    }
  };
}
