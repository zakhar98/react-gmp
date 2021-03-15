import React from "react";
import "./style.scss";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-message">
        <i className="fas fa-exclamation-circle"></i>
        <h1 className="error-message__text">Oops! Something went wrong</h1>
      </div>
    </div>
  );
}
