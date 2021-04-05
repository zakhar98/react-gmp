import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Tabs from "../../components/Tabs/Tabs.js"
import {fetchMovies} from "../../redux/actions/movies-list_actions.js"

const GenreFilterTabs = [
  {
    name: 'All',
  },   {
    name: 'Documentary',
  },   {
    name: 'Comedy',
  },   {
    name: 'Horror',
  },   {
    name: 'Crime',
  }, 
];

function GenreFilter({searchParams, fetchMovies}) {
  const onClickTabItem = (tabName) => {
    const genres = tabName === 'All' ? [] : [tabName];
    fetchMovies({
      ...searchParams,
      filter: genres,
    });
  }

  const activeTabName = searchParams.filter.length ?
  searchParams.filter[0] : 'All';

  return (
    <>
      <Tabs
        tabs={GenreFilterTabs}
        onClickTabItem={onClickTabItem}
        activeTabName={activeTabName}
      />
    </>
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
    fetchMovies: (params) => {dispatch(fetchMovies(params))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreFilter);

GenreFilter.propTypes = {
  searchParams: PropTypes.object.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};
