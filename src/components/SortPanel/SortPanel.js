
import React, {useState} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {fetchMovies} from "../../redux/actions/movies-list_actions.js"
import "./style.scss";

const sortOptions = [
  {
    value: 'release_date',
    name: 'Release Date',
  }, {
    value: 'vote_average',
    name: 'Rating',
  }
];

function SortPanel({searchParams, fetchMovies}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const changeSortKey = (value) => {
    handleClose();

    fetchMovies({...searchParams, sortBy: value})
  }

  const displayName = sortOptions
    .find(({value}) => value === searchParams.sortBy).name;

  return (
    <div className="sort-panel">
      <div className="sort-panel-button" onClick={handleClick}>
        <div className="sort-panel-button__description">Sort by</div>
        <div className="sort-panel-button__select">
          {displayName}
          <i className="fas fa-sort-down"></i>
        </div>
      </div>
      <Menu
        id="movie-card-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {sortOptions.map(({name, value}) => (
          <MenuItem
            onClick={() => changeSortKey(value)}
            key={value}
            >
              {name}
            </MenuItem>
        ))}
      </Menu>
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

export default connect(mapStateToProps, { fetchMovies })(SortPanel);

SortPanel.propTypes = {
  searchParams: PropTypes.object.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};
