import React from "react";
import PropTypes from "prop-types";
import { useField } from 'formik';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import "./style.scss";

export default function CustomMultiselect({label, fieldName, options, placeholder}) {
    const [field, meta, helpers] = useField(fieldName);

    const MenuProps = {
      variant: "menu",
      getContentAnchorEl: null
    };

    return (
      <div className={`multiselect ${meta.error && meta.touched ? 'error': ''}`}>
        <FormControl>
          <InputLabel id={`${field.name}-label`}>{label}</InputLabel>
          <Select
            labelId={`${field.name}-label`}
            id={field.name}
            multiple
            value={field.value}
            onChange={e => helpers.setValue(e.target.value)}
            onClose={() => helpers.setTouched(true)}
            input={<Input />}
            MenuProps={MenuProps}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Placeholder</em>;
              }
  
              return selected.join(', ');
            }}
          > 
            <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Checkbox checked={field.value.indexOf(option.value) > -1} />
                <ListItemText primary={option.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {meta.error && meta.touched && <div className="multiselect__error-text">{meta.error}</div>}
      </div>
    );
}

CustomMultiselect.propTypes = {
  fieldName: PropTypes.string,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
