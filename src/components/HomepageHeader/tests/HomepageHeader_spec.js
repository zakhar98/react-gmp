import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import HomepageHeader from '../HomepageHeader.js';

describe('HomepageHeader', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer
      .render(<HomepageHeader />);
    expect(tree).toMatchSnapshot();
  });
});
