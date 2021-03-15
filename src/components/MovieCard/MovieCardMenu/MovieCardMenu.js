import React, {Component} from "react";
import PropTypes from "prop-types";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./style.scss";

class MovieCardMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
  }

  handleClick(event) {
    this.setState({anchorEl: event.currentTarget})
  };

  handleClose() {
    this.setState({anchorEl: null})
  }

  showDeleteModal() {
    this.props.showDeleteModal();
    this.handleClose();
  }

  showEditModal() {
    this.props.showEditModal();
    this.handleClose();
  }

  render() {
    return (
      <div className="movie-card-menu">
        <div className="movie-card-menu__button" onClick={this.handleClick}>
          <i className="fas fa-ellipsis-v"></i>
        </div>
        <Menu
          id="movie-card-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.showEditModal}>Edit</MenuItem>
          <MenuItem onClick={this.showDeleteModal}>Delete</MenuItem>
        </Menu>
      </div>
    );
  }
}

MovieCardMenu.propTypes = {
  showDeleteModal: PropTypes.func.isRequired,
  showEditModal: PropTypes.func.isRequired,
};

export default MovieCardMenu;
