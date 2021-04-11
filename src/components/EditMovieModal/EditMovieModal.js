import React, {useEffect, useState} from "react";
import { Formik, Field } from 'formik';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CustomButton from "../CustomButton/CustomButton.js";
import CustomInput from "../CustomInput/CustomInput.js";
import CustomMultiselect from "../CustomMultiselect/CustomMultiselect.js";
import {genreOptions} from "../../utils/constants.js";
import {requiredString, requiredArray, positiveNumberValidator} from "../../utils/validators.js";
import {fetchMovieToEdit, resetModalsState,} from "../../redux/actions/modals_actions.js";
import "./style.scss";

function EditMovieModal(
  {movieId, fetchMovie, editMovie, resetModalsState}) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovieToEdit = async () => {
      const movie = await fetchMovie(movieId);
      setMovie(movie);
    };

    fetchMovieToEdit();
  }, []);

  const tempMovieData = {
    title: "",
    release_date: "",
    poster_path: "",
    genres: [],
    overview: "",
    runtime: 0,
    tagline: "Tagline",
  };

  return (
    <Formik
      enableReinitialize={true} 
      initialValues={movie ? movie : tempMovieData}
      onSubmit={(values) => {
        editMovie(values);
        resetModalsState();
      }}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        resetForm,
      }) => (
        <form
          className="edit-movie-form"
          onSubmit={handleSubmit}
        >
          <div className="edit-movie-form__content">
            <Field
              component={CustomInput}
              label="Title"
              name="title"
              id="title"
              type="text"
              placeholder="Title here"
              onChange={handleChange}
              validate={requiredString}
            />
            <Field
              component={CustomInput}
              label="Release date"
              name="release_date"
              id="release_date"
              type="date"
              placeholder="Select Date"
              onChange={handleChange}
              validate={requiredString}
            />
            <Field
              component={CustomInput}
              label="Movie URL"
              name="poster_path"
              id="poster_path"
              type="url"
              placeholder="Movie URL here"
              onChange={handleChange}
              validate={requiredString}
            />
            <Field
              component={CustomMultiselect}
              label="Genre"
              name="genres"
              fieldName="genres"
              placeholder="Select Genre"
              options={genreOptions}
              value={values.genres}
              validate={(value) => requiredArray(
                value, 'Select at least one genre to proceed',
              )}
            />
            <Field
              component={CustomInput}
              label="Overview"
              name="overview"
              id="overview"
              type="text"
              placeholder="Overview here"
              onChange={handleChange}
              validate={requiredString}
            />
            <Field
              component={CustomInput}
              label="Runtime"
              name="runtime"
              id="runtime"
              type="number"
              placeholder="Runtime here"
              onChange={handleChange}
              validate={positiveNumberValidator}
            />
          </div>
          <div className="edit-movie-form__footer">
            <CustomButton type="reset" outlined onClick={resetForm}>RESET</CustomButton>
            <CustomButton type="submit">SUBMIT</CustomButton>
          </div>
        </form>
      )}
    </Formik>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMovie: async (movieId) => {
      return await dispatch(fetchMovieToEdit(movieId))
    },
    resetModalsState: () => {dispatch(resetModalsState())},
  }
}

export default connect(null, mapDispatchToProps)(EditMovieModal);

EditMovieModal.propTypes = {
  movieId: PropTypes.number,
  editMovie: PropTypes.func.isRequired,
  fetchMovie: PropTypes.func.isRequired,
  resetModalsState: PropTypes.func.isRequired,
};
