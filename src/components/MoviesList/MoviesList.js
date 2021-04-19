import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "../MovieCard/MovieCard.js";
import "./style.scss";
import NoMoviesFound from "./NoMovieFound/NoMovieFound.js";

export default function MoviesList({movies, totalCount, showDeleteModal, showEditModal}) {
  if (totalCount) {
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
              id={movie.id}
              key={movie.id}
              showDeleteModal={()=>showDeleteModal(movie.id)}
              showEditModal={()=>showEditModal(movie.id)}
            />
          ))}
        </div>
      </>
    );
  }

  return <NoMoviesFound />;
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
  showDeleteModal: PropTypes.func.isRequired,
  showEditModal: PropTypes.func.isRequired,
};
