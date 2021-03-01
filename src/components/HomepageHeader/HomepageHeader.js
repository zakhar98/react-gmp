import React from "react";
import Logo from "../Logo/Logo.js";
import SearchBar from "../SearchBar/SearchBar.js";
import "./style.scss";

export default function HomepageHeader() {
  return (
    <header className="homepage-header">
      <div className="homepage-header__top">
        <Logo />
        <button className="homepage-header__add-movie-button"> + add movie</button>
      </div>
      <div className="homepage-header__content">
        <div className="homepage-header__content-text">FIND YOUR MOVIE</div>
        <SearchBar />
      </div>
    </header>
  );
}
