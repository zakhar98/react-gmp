import React, {useState} from "react";
import PropTypes from "prop-types";
import CustomButton from "../../../CustomButton/CustomButton.js";
import CustomInput from "../../../CustomInput/CustomInput.js";
import CustomMultiselect from "../../../CustomMultiselect/CustomMultiselect.js";
import "./style.scss";

const genreOptions = [
  {
    name: 'Drama',
    value: 'drama',
  }, {
    name: 'Crime',
    value: 'crime',
  }, {
    name: 'Comedy',
    value: 'comedy',
  }
];

export default function AddMovieModal({onClose}) {
    const [movie, setMovie] = useState(
      {
        title: "",
        releaseDate: "",
        movieUrl: "",
        genre: [],
        overview: "",
        runtime: "",
      }
    );

    const handleInputChange = (e) => {
      const target = e.target;
      const value = target.value;
      const name = target.name;

      setMovie({
        ...movie,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Dispatch create movie action

      onClose();
    }

    const handleReset = (e) => {
      e.preventDefault();
  
      setMovie({
        title: "",
        releaseDate: "",
        movieUrl: "",
        genre: [],
        overview: "",
        runtime: "",
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
            name="releaseDate"
            id="release-date"
            type="date"
            value={movie.releaseDate}
            placeholder="Select Date"
            onChange={handleInputChange}
          />
          <CustomInput
            label="Movie URL"
            name="movieUrl"
            id="movie-url"
            type="url"
            value={movie.movieUrl}
            placeholder="Movie URL here"
            onChange={handleInputChange}
          />
          <CustomMultiselect
            label="Genre"
            name="genre"
            placeholder="Select Genre"
            options={genreOptions}
            value={movie.genre}
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
  
  AddMovieModal.propTypes = {
    onClose: PropTypes.func,
  };
