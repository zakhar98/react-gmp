import React, {useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CustomButton from "../../../CustomButton/CustomButton.js";
import CustomInput from "../../../CustomInput/CustomInput.js";
import CustomMultiselect from "../../../CustomMultiselect/CustomMultiselect.js";
import {genreOptions} from "../../../../utils/constants.js";
import {createMovie, fetchMovies} from "../../../../redux/actions/movies-list_actions.js"
import "./style.scss";

function AddMovieModal(
  {searchParams, createMovie, fetchMovies, onClose}) {
    const [movie, setMovie] = useState(
      {
        title: "",
        release_date: "",
        poster_path: "",
        genres: [],
        overview: "",
        runtime: 0,

        tagline: "Tagline",
      }
    );

    const handleInputChange = (e) => {
      const target = e.target;
      const name = target.name;
      const value = name === 'runtime' ? 
        Number(target.value) : target.value;

      setMovie({
        ...movie,
        [name]: value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      await createMovie(movie);
      fetchMovies(searchParams);

      onClose();
    }

    const handleReset = (e) => {
      e.preventDefault();
  
      setMovie({
        title: "",
        release_date: "",
        poster_path: "",
        genres: [],
        overview: "",
        runtime: 0,

        tagline: "Tagline",
      });
    }

    return (
      <form
        className="add-movie-form"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <div className="add-movie-form__content">
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
            type="text"
            value={movie.runtime}
            placeholder="Runtime here"
            onChange={handleInputChange}
          />
        </div>
        <div className="add-movie-form__footer">
          <CustomButton type="reset" outlined>RESET</CustomButton>
          <CustomButton type="submit">SUBMIT</CustomButton>
        </div>
      </form>
    );
  }

  function mapStateToProps(state) {
    const {moviesList: {
      searchParams,
    }} = state;

    return {
      searchParams,
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      createMovie: async (movie) => {
        return dispatch(createMovie(movie))
      },
      fetchMovies: (params) => {dispatch(fetchMovies(params))},
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AddMovieModal);

  AddMovieModal.propTypes = {
    searchParams: PropTypes.object.isRequired,
    createMovie: PropTypes.func.isRequired,
    fetchMovies: PropTypes.func.isRequired,
    onClose: PropTypes.func,
  };
