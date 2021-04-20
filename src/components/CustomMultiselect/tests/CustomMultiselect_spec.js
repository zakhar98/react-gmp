import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CustomMultiselect from '../CustomMultiselect.js';
import * as formik from 'formik';

formik.useField = jest.fn(()=>[{}, {}, {}]);

describe('CustomMultiselect', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer
      .render(
      <CustomMultiselect 
        label="test_label"
        fieldName="test field name"
        options={[]}
        placeholder="test placeholder"
      />);
    expect(tree).toMatchSnapshot();
  });
});
