import movieDetailsReducer from '../movie-details_reducer.js';
import actionTypes from '../../actions/actionTypes.js';

const initialState = {
  movie: {},
  fetching: false,
};

describe('movie-details_reducer', () => {
  it('should return the initial state', () => {
    expect(movieDetailsReducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should handle FETCH_MOVIE_DETAILS_START', () => {
    expect(
      movieDetailsReducer(initialState, {
        type: actionTypes.FETCH_MOVIE_DETAILS_START,
      })
    ).toEqual({
        movie: {},
        fetching: true,
      })
  });

  it('should handle FETCH_MOVIE_DETAILS_SUCCESS', () => {
    expect(
      movieDetailsReducer({
        movie: {},
        fetching: true,
      }, {
        type: actionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
        payload: {id: 'some_movie_id'}
      })
    ).toEqual({
        movie: {id: 'some_movie_id'},
        fetching: false,
      })
  });

  it('should handle FETCH_MOVIE_DETAILS_FAILURE', () => {
    expect(
      movieDetailsReducer({
        movie: {},
        fetching: true,
      }, {
        type: actionTypes.FETCH_MOVIE_DETAILS_FAILURE,
      })
    ).toEqual({
        movie: {},
        fetching: false,
      })
  });
})
