import actionTypes from '../actions/actionTypes.js';

const initialState = {
  editMovieModal: {
    movie: {},
    fetching: false,
  }
};

export default function modalsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE_TO_EDIT_START:
      return {
        ...state,
        editMovieModal: {
          ...state.editMovieModal,
          fetching: true,
        }
      };
    case actionTypes.FETCH_MOVIE_TO_EDIT_SUCCESS:
      return {
        ...state,
        editMovieModal: {
          movie: action.payload,
          fetching: false,
        }
      };
    case actionTypes.FETCH_MOVIE_TO_EDIT_FAILURE:
      return {
        ...state,
        editMovieModal: {
          ...state.editMovieModal,
          fetching: false,
        }
      };
    case actionTypes.RESET_MODALS_STATE:
      return {...initialState};
    default:
       return state;
 }
}
