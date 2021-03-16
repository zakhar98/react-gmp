import React, {useState} from "react";
import PropTypes from "prop-types";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./style.scss";

export default function MovieCardMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  }

  const showDeleteModal = () => {
    props.showDeleteModal();
    handleClose();
  }

  const showEditModal = () => {
    props.showEditModal();
    handleClose();
  }

  return (
    <div className="movie-card-menu">
      <div className="movie-card-menu__button" onClick={handleClick}>
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <Menu
        id="movie-card-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={showEditModal}>Edit</MenuItem>
        <MenuItem onClick={showDeleteModal}>Delete</MenuItem>
      </Menu>
    </div>
  );
}


MovieCardMenu.propTypes = {
  showDeleteModal: PropTypes.func.isRequired,
  showEditModal: PropTypes.func.isRequired,
};
