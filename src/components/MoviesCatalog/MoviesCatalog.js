import React from "react";
import MoviesListContainer from "../../containers/MoviesListContainer/MoviesListContainer.js";
import GenreFilter from "../../containers/GenreFilter/GenreFilter.js";
import SortPanel from "../SortPanel/SortPanel.js";
import "./style.scss";


export default function MoviesCatalog() {
  return (
    <div className="movies-catalog">
      <div className="nav-bar">
        <GenreFilter />
        <SortPanel />
      </div>
      <MoviesListContainer />
    </div>
  );
}
