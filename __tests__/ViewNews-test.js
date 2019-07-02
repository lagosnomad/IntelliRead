import React from 'react';
import ViewNews from '../screens/ViewNews';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ViewNews />);
});