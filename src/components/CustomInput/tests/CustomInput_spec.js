import React from 'react';
import renderer from 'react-test-renderer';
import CustomInput from '../CustomInput.js';
import * as formik from 'formik';

formik.useField = jest.fn(()=>[{}, {}, {}]);

describe('CustomInput', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CustomInput />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
