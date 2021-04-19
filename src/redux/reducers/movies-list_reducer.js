import actionTypes from '../actions/actionTypes.js';

const initialState = {
  movies: {
    items: [],
    totalCount: 0,
  },
  fetching: false,
  searchParams: {
    search: '',
    searchBy: 'title',
    filter: [],
    sortBy: 'release_date',
    sortOrder: 'asc',
  },
};

export default function moviesListReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        searchParams: {
          ...initialState.searchParams,
          ...action.payload,
        },
        fetching: true,
      };
    case actionTypes.FETCH_MOVIES_SUCCESS:
       return {
         ...state,
         movies: {
          items: action.payload.data,
          totalCount: action.payload.totalAmount,
         },
         fetching: false,
       };
    case actionTypes.FETCH_MOVIES_FAILURE:
      return {...state, fetching: false};

    case actionTypes.DELETE_MOVIE_START:
      return {...state, fetching: true};
    case actionTypes.DELETE_MOVIE_SUCCESS:
      return {...state, fetching: false};
    case actionTypes.DELETE_MOVIE_FAILURE:
      return {...state, fetching: false};

    case actionTypes.EDIT_MOVIE_START:
      return {...state, fetching: true};
    case actionTypes.EDIT_MOVIE_SUCCESS:
      return {...state, fetching: false};
    case actionTypes.EDIT_MOVIE_FAILURE:
      return {...state, fetching: false};

    case actionTypes.CREATE_MOVIE_START:
      return {...state, fetching: true};
    case actionTypes.CREATE_MOVIE_SUCCESS:
      return {...state, fetching: false};
    case actionTypes.CREATE_MOVIE_FAILURE:
      return {...state, fetching: false};
    default:
       return state;
 }
}
