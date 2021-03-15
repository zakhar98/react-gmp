import React from "react";
import PropTypes from "prop-types";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import "./style.scss";

export default function CustomMultiselect(
  {name, value, options, label, onChange, placeholder}) {

    const MenuProps = {
      variant: "menu",
      getContentAnchorEl: null
    };

    return (
      <div className="multiselect">
        <FormControl>
          <InputLabel id="demo-mutiple-checkbox-label">{label}</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={value}
            onChange={onChange}
            name={name}
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
                <Checkbox checked={value.indexOf(option.value) > -1} />
                <ListItemText primary={option.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
}

CustomMultiselect.propTypes = {
  name: PropTypes.string,
  value: PropTypes.array.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
