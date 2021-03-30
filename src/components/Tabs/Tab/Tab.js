import React from "react";
import PropTypes from 'prop-types';
import "./style.scss";

export default function Tab({name, isActive, onClick}) {
  return (
      <div
        className={`tab ${isActive ? 'active' : ''}`}
        onClick={(event) => {
          event.preventDefault();
          onClick(name);
        }}
      >
        {name}
      </div>
  )
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
