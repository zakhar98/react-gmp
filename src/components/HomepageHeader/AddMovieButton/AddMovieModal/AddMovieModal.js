import React from "react";
import { Formik, Field } from 'formik';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import CustomButton from "../../../CustomButton/CustomButton.js";
import CustomInput from "../../../CustomInput/CustomInput.js";
import CustomMultiselect from "../../../CustomMultiselect/CustomMultiselect.js";
import {genreOptions} from "../../../../utils/constants.js";
import {requiredString, requiredArray, positiveNumberValidator} from "../../../../utils/validators.js";
import {createMovie, fetchMovies} from "../../../../redux/actions/movies-list_actions.js"
import "./style.scss";

function AddMovieModal({searchParams, createMovie, fetchMovies, onClose}) {
    return (
      <Formik
        initialValues={{
          title: "",
          release_date: "",
          poster_path: "",
          genres: [],
          overview: "",
          runtime: 0,
          tagline: "Tagline",
        }}
        onSubmit={async (values) => {
          await createMovie(values);
          fetchMovies(searchParams);
          onClose();
        }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          resetForm,
        }) => (
          <form
            className="add-movie-form"
            onSubmit={handleSubmit}
          >
            <div className="add-movie-form__content">
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
            <div className="add-movie-form__footer">
              <CustomButton type="reset" outlined onClick={resetForm}>RESET</CustomButton>
              <CustomButton type="submit">SUBMIT</CustomButton>
            </div>
          </form>
        )}
      </Formik>
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
