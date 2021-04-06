export function requiredString(value, errorText) {
  let error;
  if (!value.trim()) {
    error = errorText || 'This field is required';
  }
  return error;
}

export function requiredArray(value, errorText) {
  let error;
  if (!value || !value.length) {
    error = errorText || 'This field is required';
  }
  return error;
}

export function positiveNumberValidator(value, errorText) {
  let error;
  if (!(typeof value === 'number') || value < 0) {
    error = errorText || 'Value must be a number';
  }
  return error;
}
