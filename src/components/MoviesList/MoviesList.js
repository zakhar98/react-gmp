import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "../MovieCard/MovieCard.js";
import "./style.scss";

export default function MoviesList({movies, totalCount}) {
  return (
    <>
      <div className="movies-count">
        <span>{totalCount}</span> movies found
      </div>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            title={movie.title}
            releaseDate={movie.releaseDate}
            imageUrl={movie.imageUrl}
            genre={movie.genre}
            key={movie.id}
          />
        ))}
      </div>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
};
