import React from "react";
import PropTypes from 'prop-types';
import MovieCardMenu from "./MovieCardMenu/MovieCardMenu.js";
import "./style.scss";

export default function MovieCard(
  {title, releaseDate, imageUrl, genre, showDeleteModal, showEditModal}) {
    return (
      <div className="movie-card">
        <img src={imageUrl}></img>
        <div className="movie-card__content">
          <div className="movie-card__description">
            <div className="movie-card__title">{title}</div>
            <div className="movie-card__genre">{genre}</div>
          </div>
          <div className="movie-card__date"><span>{releaseDate}</span></div>
        </div>
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
  releaseDate: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  showDeleteModal: PropTypes.func.isRequired,
  showEditModal: PropTypes.func.isRequired,
};
