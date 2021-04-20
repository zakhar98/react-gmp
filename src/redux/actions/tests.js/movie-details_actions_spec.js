import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../movie-details_actions.js'
import actionTypes from '../actionTypes.js';
import ApiService from "../../../services/api_service.js"

const movie = {id: 'some_movie'};
const error = {message: 'Some error'};

jest.mock("../../../services/api_service", () => ({
  fetchMovie: jest.fn(() => Promise.resolve(movie)),
}));

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('movie-details_actions', () => {
  it('fetchMovieDetailsStart should create correct action', () => {
    const expectedAction = {
      type: actionTypes.FETCH_MOVIE_DETAILS_START,
    }

    expect(actions.fetchMovieDetailsStart()).toEqual(expectedAction)
  })

  it('fetchMovieDetailsSuccess should create correct action', () => {
    const expectedAction = {
      type: actionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
      payload: movie,
    }

    expect(actions.fetchMovieDetailsSuccess(movie)).toEqual(expectedAction)
  })

  it('fetchMovieDetailsFailure should create correct action', () => {
    const expectedAction = {
      type: actionTypes.FETCH_MOVIE_DETAILS_FAILURE,
      payload: {error},
    }

    expect(actions.fetchMovieDetailsFailure(error)).toEqual(expectedAction)
  })

  describe('fetchMovieDetails', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    it('creates FETCH_MOVIE_DETAILS_SUCCESS action on fetching movie success', () => {
      const expectedActions = [
        { type: actionTypes.FETCH_MOVIE_DETAILS_START },
        {
          type: actionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
          payload: movie,
        }
      ]
      const store = mockStore({})

      return store.dispatch(actions.fetchMovieDetails(123)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        expect(ApiService.fetchMovie).toHaveBeenCalledWith(123)
      })
    });

    it('creates FETCH_MOVIE_DETAILS_FAILURE on fetching movie failure', () => {
      ApiService.fetchMovie = jest.fn(() => Promise.reject(error))
      const expectedActions = [
        { type: actionTypes.FETCH_MOVIE_DETAILS_START },
        {
          type: actionTypes.FETCH_MOVIE_DETAILS_FAILURE,
          payload: {error},
        }
      ]
      const store = mockStore({})

      return store.dispatch(actions.fetchMovieDetails(123)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        expect(ApiService.fetchMovie).toHaveBeenCalledWith(123)
      })
    });
  })
})
