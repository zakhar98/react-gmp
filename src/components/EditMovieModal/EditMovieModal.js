import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CustomButton from "../CustomButton/CustomButton.js";
import CustomInput from "../CustomInput/CustomInput.js";
import CustomMultiselect from "../CustomMultiselect/CustomMultiselect.js";
import {genreOptions} from "../../utils/constants.js";
import {fetchMovieToEdit, resetModalsState} from "../../redux/actions/modals_actions.js";
import "./style.scss";

function EditMovieModal(
  {movieId, movieDetails, fetchMovie, editMovie, resetModalsState}) {
  const [movie, setMovie] = useState({
    title: "",
    release_date: "",
    poster_path: "",
    genres: [],
    overview: "",
    runtime: 0,
  });

  useEffect(() => {
    const fetchMovieToEdit = async () => {
      const movie = await fetchMovie(movieId);
      setMovie(movie);
    };

    fetchMovieToEdit();
  }, []);

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = name === 'runtime' ? 
      Number(target.value) : target.value;

    setMovie({...movie, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    editMovie(movie);
    resetModalsState();
  }

  const handleReset = (e) => {
    e.preventDefault();

    setMovie(movieDetails);
  }

  return (
    <form
      className="edit-movie-form"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <div className="edit-movie-form__content">
        <CustomInput
          label="Title"
          name="title"
          id="title"
          type="text"
          value={movie.title}
          placeholder="Title here"
          onChange={handleInputChange}
        />
        <CustomInput
          label="Release date"
          name="release_date"
          id="release-date"
          type="date"
          value={movie.release_date}
          placeholder="Select Date"
          onChange={handleInputChange}
        />
        <CustomInput
          label="Movie URL"
          name="poster_path"
          id="movie-url"
          type="url"
          value={movie.poster_path}
          placeholder="Movie URL here"
          onChange={handleInputChange}
        />
        <CustomMultiselect
          label="Genre"
          name="genres"
          placeholder="Select Genre"
          options={genreOptions}
          value={movie.genres}
          onChange={handleInputChange}
        />
        <CustomInput
          label="Overview"
          name="overview"
          id="overview"
          type="text"
          value={movie.overview}
          placeholder="Overview here"
          onChange={handleInputChange}
        />
        <CustomInput
          label="Runtime"
          name="runtime"
          id="runtime"
          type="number"
          value={movie.runtime}
          placeholder="Runtime here"
          onChange={handleInputChange}
        />
      </div>
      <div className="edit-movie-form__footer">
        <CustomButton type="reset" outlined>RESET</CustomButton>
        <CustomButton type="submit">SUBMIT</CustomButton>
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  const {modals: {
    editMovieModal: {
      movie: movieDetails,
    },
  }} = state;

  return {
    movieDetails,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMovie: async (movieId) => {
      return await dispatch(fetchMovieToEdit(movieId))
    },
    resetModalsState: () => {dispatch(resetModalsState())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieModal);

EditMovieModal.propTypes = {
  movieId: PropTypes.number,
  editMovie: PropTypes.func.isRequired,
  movieDetails: PropTypes.object.isRequired,
  fetchMovie: PropTypes.func.isRequired,
  resetModalsState: PropTypes.func.isRequired,
};
