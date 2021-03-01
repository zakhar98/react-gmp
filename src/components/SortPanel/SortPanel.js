import React from "react";
import "./style.scss";

export default function SortPanel() {
  return (
    <div className="sort-panel">
      <div className="sort-panel__description">Sort by</div>
      <div className="sort-panel__select">
        Release date
        <i className="fas fa-sort-down"></i>
      </div>
    </div>
  );
}
