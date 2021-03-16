
import React, {useState} from "react";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./style.scss";

const sortOptions = [
  {
    value: 'releaseDate',
    name: 'Release Date',
  }, {
    value: 'title',
    name: 'Title',
  }, {
    value: 'genre',
    name: 'Genre',
  }
];

export default function SortPanel() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortKey, setSortKey] = useState('releaseDate');

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const changeSortKey = (value) => {
    setSortKey(value);
    handleClose();

    // Dispatch refresh movies list action
  }

  const displayName = sortOptions
    .find(({value}) => value === sortKey).name;

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
