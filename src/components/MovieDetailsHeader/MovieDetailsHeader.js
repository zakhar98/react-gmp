import React, {useEffect, useState} from "react";
import Logo from "../Logo/Logo.js";
import useComponentDidMount from "../../utils/hooks.js";
import "./style.scss";

const fetchMovieDetails = () => ({
  title: "Pulp Fiction",
  releaseDate: 1994,
  rating: 4.3,
  runtime: "120 min",
  imageUrl: 'https://thumbs.dfs.ivi.ru/storage2/contents/3/e/506516e4dc81c88a4de176bde11374.jpg',
  description: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angele',
  id: 1,
});

export default function MovieDetailsHeader() {
  const [movie, setMovie] = useState({});

  useComponentDidMount(() => {
    // fetch movie data by id
    // toggle isFetching flag if needed
    const movie = fetchMovieDetails();
    setMovie(movie);
  });

  return (
    <header className="details-header">
      <div className="details-header__top">
        <Logo />
        <div className="details-header__search-button">
          <i className="fas fa-search fa-flip-horizontal"></i>
        </div>
      </div>
      <div className="details-header__content">
        <img src={movie.imageUrl}></img>
        <div className="details-header__movie-info">
          <div className="details-header__title-section">
            <div className="details-header__movie-title">
              {movie.title}
            </div>
            <div className="details-header__movie-rating">
              {movie.rating}
            </div>
          </div>
          <div className="details-header__release-date-section">
            <div className="details-header__movie-release-date">
              {movie.releaseDate}
            </div>
            <div className="details-header__movie-runtime">
              {movie.runtime}
            </div>
          </div>
          <div className="details-header__movie-description">
              {movie.description}
          </div>
        </div>
      </div>
    </header>
  );
}
