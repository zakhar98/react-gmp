import React from "react";
import PropTypes from 'prop-types';
import "./style.scss";

export default function Tab({name, tabIndex, isActive, onClick}) {
  return (
      <div
        className={`tab ${isActive ? 'active' : ''}`}
        onClick={(event) => {
          event.preventDefault();
          onClick(tabIndex);
        }}
      >
        {name}
      </div>
  )
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
