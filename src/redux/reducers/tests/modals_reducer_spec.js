import modalsReducer from '../modals_reducer.js';
import actionTypes from '../../actions/actionTypes.js';

const initialState = {
  editMovieModal: {
    movie: {},
    fetching: false,
  }
};

describe('modals_reducer', () => {
  it('should return the initial state', () => {
    expect(modalsReducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should handle FETCH_MOVIE_TO_EDIT_START', () => {
    expect(
      modalsReducer(initialState, {
        type: actionTypes.FETCH_MOVIE_TO_EDIT_START,
      })
    ).toEqual({
        editMovieModal: {
          movie: {},
          fetching: true,
        },
      })
  });

  it('should handle FETCH_MOVIE_TO_EDIT_SUCCESS', () => {
    expect(
      modalsReducer({editMovieModal: {
        movie: {},
        fetching: true,
      }}, {
        type: actionTypes.FETCH_MOVIE_TO_EDIT_SUCCESS,
        payload: {id: 'some_movie_id'}
      })
    ).toEqual({editMovieModal: {
      movie: {id: 'some_movie_id'},
      fetching: false,
    }})
  });

  it('should handle FETCH_MOVIE_TO_EDIT_FAILURE', () => {
    expect(
      modalsReducer({editMovieModal: {
        movie: {},
        fetching: true,
      }}, {
        type: actionTypes.FETCH_MOVIE_TO_EDIT_FAILURE,
      })
    ).toEqual({editMovieModal: {
      movie: {},
      fetching: false,
    }})
  });

  it('should handle RESET_MODALS_STATE', () => {
    expect(
      modalsReducer({editMovieModal: {
        movie: {id: 'some_movie_id'},
        fetching: false,
      }}, {
        type: actionTypes.RESET_MODALS_STATE,
      })
    ).toEqual(initialState)
  });
})
