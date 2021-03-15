import React from "react";
import PropTypes from 'prop-types';
import "./style.scss";

export default function CustomButton({children, outlined, ...rest}) {
    return (
      <button
        className={`button button_${outlined ? 'outlined' : 'contained'}`}
        {...rest}
        >
        {children}
      </button>
    );
}

CustomButton.propTypes = {
  children: PropTypes.node,
  outlined: PropTypes.bool,
}
