import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from "../CustomButton/CustomButton.js"
import "./style.scss";

export default function DeleteMovieModal({deleteMovie}) {
  return (
    <div className="delete-movie-modal">
      <div className="delete-movie-modal__content">Are you sure you want to delete this movie?</div>
      <div className="delete-movie-modal__footer">
        <CustomButton onClick={deleteMovie}>CONFIRM</CustomButton>
      </div>
    </div>
  );
}

DeleteMovieModal.propTypes = {
  deleteMovie: PropTypes.func.isRequired,
};
