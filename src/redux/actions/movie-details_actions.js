import actionTypes from './actionTypes.js';
import ApiService from '../../services/api_service.js';

export function fetchMovieDetailsStart() {
  return {
    type: actionTypes.FETCH_MOVIE_DETAILS_START,
  };
}

export function fetchMovieDetailsSuccess(movie) {
  return {
    type: actionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
    payload: movie,
  };
}

export function fetchMovieDetailsFailure(error) {
  return {
    type: actionTypes.FETCH_MOVIE_DETAILS_FAILURE,
    payload: { error }
  };
}

export function fetchMovieDetails(movieId) {
  return async (dispatch) => {
    dispatch(fetchMovieDetailsStart());

    try {
      const movie = await ApiService.fetchMovie(movieId);

      dispatch(fetchMovieDetailsSuccess(movie));
      return movie;
    } catch (error) {
      dispatch(fetchMovieDetailsFailure(error));
    }
  };
}
