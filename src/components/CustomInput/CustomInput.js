import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export default function CustomInput(
  {name, type, value, label, id, placeholder, onChange}) {
    return (
      <div className="input">
        <label className="input__label" htmlFor={id}>{label}</label><br/>
        <input className="input__field"
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
}

CustomInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
