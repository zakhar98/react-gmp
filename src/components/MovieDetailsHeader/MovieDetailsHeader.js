import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.js";
import {fetchMovieDetails} from "../../redux/actions/movie-details_actions.js"
import "./style.scss";

function MovieDetailsHeader(
  {movie, fetching, fetchMovieDetails, match:{params:{id: movieId}}}) {

  useEffect(() => {
    fetchMovieDetails(movieId);
    }, [movieId]);

  const releaseDateYear = movie.release_date ?
    new Date(movie.release_date).getFullYear(): '';

  return (
    <header className="details-header">
      <div className="details-header__top">
        <Logo />
        <Link to="/">
          <div className="details-header__search-button">
            <i className="fas fa-search fa-flip-horizontal"></i>
          </div>
        </Link>
      </div>
      {!movie.id && !fetching ?
        (<div className="details-header__not-found">Movie not found</div>):
        (<div className="details-header__content">
          <img src={movie.poster_path}></img>
          <div className="details-header__movie-info">
            <div className="details-header__title-section">
              <div className="details-header__movie-title">
                {movie.title}
              </div>
              <div className="details-header__movie-rating">
                {movie.vote_average}
              </div>
            </div>
            <div className="details-header__release-date-section">
              <div className="details-header__movie-release-date">
                {releaseDateYear}
              </div>
              <div className="details-header__movie-runtime">
                {movie.runtime} min
              </div>
            </div>
            <div className="details-header__movie-description">
                {movie.overview}
            </div>
          </div>
        </div>)}
    </header>
  );
}

function mapStateToProps(state) {
  const {movieDetails: {
    movie,
    fetching,
  }} = state;

  return {
    movie,
    fetching,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMovieDetails: async (movieId) => {
      return await dispatch(fetchMovieDetails(movieId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(MovieDetailsHeader)
  );

MovieDetailsHeader.propTypes = {
  movie: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  match: PropTypes.object,
  fetchMovieDetails: PropTypes.func.isRequired,
};
