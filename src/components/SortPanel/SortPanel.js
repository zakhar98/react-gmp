
import React, {Component} from "react";
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

class SortPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      sortKey: 'releaseDate',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setSortKey = this.setSortKey.bind(this);
  }

  handleClick(event) {
    this.setState({anchorEl: event.currentTarget})
  };

  handleClose() {
    this.setState({anchorEl: null})
  }

  setSortKey(value) {
    this.setState({sortKey: value});
    this.handleClose();

    // Dispatch refresh movies list action
  }

  render() {
    const displayName = sortOptions
      .find(({value}) => value === this.state.sortKey).name;

    return (
      <div className="sort-panel">
        <div className="sort-panel-button" onClick={this.handleClick}>
          <div className="sort-panel-button__description">Sort by</div>
          <div className="sort-panel-button__select">
            {displayName}
            <i className="fas fa-sort-down"></i>
          </div>
        </div>
        <Menu
          id="movie-card-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          {sortOptions.map(({name, value}) => (
            <MenuItem
              onClick={() => this.setSortKey(value)}
              key={value}
              >
                {name}
              </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default SortPanel;

