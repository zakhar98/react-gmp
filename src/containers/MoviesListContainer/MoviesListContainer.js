import React from "react";
import MoviesList from "../../components/MoviesList/MoviesList.js";
import movies from "./movies.js";

export default function MoviesListContainer() {
  return (
    <>
      <MoviesList movies={movies} totalCount={movies.length} />
    </>
  );
}
