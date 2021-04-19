import actionTypes from '../actions/actionTypes.js';

const initialState = {
  movie: {},
  fetching: false,
};

export default function movieDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_MOVIE_DETAILS_START:
      return {
        ...state,
        fetching: true,
      };
    case actionTypes.FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        movie: action.payload,
        fetching: false,
      };
    case actionTypes.FETCH_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    default:
       return state;
 }
}
