import React from 'react';
import Home from '../screens/Home';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Home />);
});