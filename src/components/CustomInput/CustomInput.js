import React from "react";
import PropTypes from "prop-types";
import { useField } from 'formik';
import "./style.scss";

export default function CustomInput({type, label, id, placeholder, onChange}) {
    const [field, meta, helpers] = useField(id);

    return (
      <div className="input">
        <label className="input__label" htmlFor={id}>{label}</label><br/>
        <input className={`input__field ${meta.error && meta.touched ? 'error': ''}`}
          type={type}
          id={id}
          value={field.value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={() => helpers.setTouched(true)}
        />
        {meta.error && meta.touched && <div className="input__error-text">{meta.error}</div>}
      </div>
    );
}

CustomInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
