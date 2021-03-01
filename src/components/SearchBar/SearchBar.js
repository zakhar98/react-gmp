import React from "react";
import "./style.scss";

export default function SearchBar() {
  return (
    <div className="search-bar">
        <input className="search-bar__input" placeholder="What do you want to watch?"/>
        <button className="search-bar__button">SEARCH</button>
    </div>
  );
}
