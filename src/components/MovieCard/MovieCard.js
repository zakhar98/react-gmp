import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MovieCardMenu from "./MovieCardMenu/MovieCardMenu.js";
import "./style.scss";

export default function MovieCard(
  {title, releaseDate, imageUrl, genres, id, showDeleteModal, showEditModal}) {
    const releaseDateYear = new Date(releaseDate).getFullYear();

    return (
      <div className="movie-card">
        <Link to={`/film/${id}`}>
          <img src={imageUrl}></img>
          <div className="movie-card__content">
            <div className="movie-card__description">
              <div className="movie-card__title">{title}</div>
              <div className="movie-card__genre">{genres.join(', ')}</div>
            </div>
            <div className="movie-card__date"><span>{releaseDateYear}</span></div>
          </div>
        </Link>
        <div className="movie-card__menu">
          <MovieCardMenu
            showDeleteModal={showDeleteModal}
            showEditModal={showEditModal}
          />
        </div>
      </div>
    );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  showDeleteModal: PropTypes.func.isRequired,
  showEditModal: PropTypes.func.isRequired,
};
