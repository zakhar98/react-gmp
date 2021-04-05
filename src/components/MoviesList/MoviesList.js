import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "../MovieCard/MovieCard.js";
import "./style.scss";

export default function MoviesList({movies, totalCount, showDeleteModal, showEditModal}) {
  return (
    <>
      <div className="movies-count">
        <span>{totalCount}</span> movies found
      </div>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            title={movie.title}
            releaseDate={movie.release_date}
            imageUrl={movie.poster_path}
            genres={movie.genres}
            key={movie.id}
            showDeleteModal={()=>showDeleteModal(movie.id)}
            showEditModal={()=>showEditModal(movie.id)}
          />
        ))}
      </div>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
  showDeleteModal: PropTypes.func.isRequired,
  showEditModal: PropTypes.func.isRequired,
};
