import actionTypes from './actionTypes.js';
import ApiService from '../../services/api_service.js';

function fetchMovieToEditStart() {
  return {
    type: actionTypes.FETCH_MOVIE_TO_EDIT_START,
  };
}

function fetchMovieToEditSuccess(movie) {
  return {
    type: actionTypes.FETCH_MOVIE_TO_EDIT_SUCCESS,
    payload: movie,
  };
}

function fetchMovieToEditFailure(error) {
  return {
    type: actionTypes.FETCH_MOVIE_TO_EDIT_FAILURE,
    payload: { error }
  };
}

export function fetchMovieToEdit(movieId) {
  return async (dispatch) => {
    dispatch(fetchMovieToEditStart());

    try {
      const movie = await ApiService.fetchMovie(movieId);

      dispatch(fetchMovieToEditSuccess(movie));
      return movie;
    } catch (error) {
      dispatch(fetchMovieToEditFailure(error));
    }
  };
}

export function resetModalsState() {
  return {
    type: actionTypes.RESET_MODALS_STATE,
  };
}
