import React from 'react';
import renderer from 'react-test-renderer';
import CustomButton from '../CustomButton.js';

describe('CustomButton', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CustomButton />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
