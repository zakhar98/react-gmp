import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { Formik } from 'formik';
import { withRouter } from "react-router";
import {fetchMovies} from "../../redux/actions/movies-list_actions.js"
import useComponentDidMount from "../../utils/hooks.js";
import "./style.scss";

function SearchBar({searchParams, history, match, fetchMovies}) {
  let initialValues = {
    searchQuery: "",
  };

  useComponentDidMount(() => {
    if (match.params.searchQuery) {
      initialValues.searchQuery = match.params.searchQuery;
    } else if (searchParams.search) {
      initialValues.searchQuery = searchParams.search;
      history.push(`/search/${initialValues.searchQuery}`);
    }
  });

  return (
    <div className="search-bar">
      <Formik
        initialValues={initialValues}
        onSubmit={async ({searchQuery}) => {
          await fetchMovies({
            ...searchParams,
            search: searchQuery,
          });

          searchQuery ?
            history.push(`/search/${searchQuery}`):
            history.push("/");
        }}
      >
        {({
          values: {searchQuery},
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form
            className="search-bar__form"
          >
            <input
              className="search-bar__input"
              placeholder="What do you want to watch?"
              name="searchQuery"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={searchQuery}
            />
            <button
              className="search-bar__button"
              type="submit"
              onClick={handleSubmit}
            >
              SEARCH
            </button>
          </form>
        )}
      </Formik>
    </div>
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

export default connect(
    mapStateToProps, {fetchMovies},
  )(withRouter(SearchBar));

SearchBar.propTypes = {
  searchParams: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};
