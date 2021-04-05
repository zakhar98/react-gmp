import qs from 'qs';
import API from './api.js';

class ApiService {
  static async fetchMovies(params) {
    const result =  await API.get('/movies', {
      params,
      paramsSerializer: params => {
        return qs.stringify(params, {arrayFormat: 'comma'});
      }
    });

    return result.data;
  }

  static async deleteMovie(movieId) {
    await API.delete(`/movies/${movieId}`);
  }

  static async editMovie(movie) {
    await API.put(`/movies`, movie);
  }

  static async createMovie(movie) {
    await API.post(`/movies`, movie);
  }

  static async fetchMovie(movieId) {
    const result = await API.get(`/movies/${movieId}`);
    return result.data;
  }
}

export default ApiService;
