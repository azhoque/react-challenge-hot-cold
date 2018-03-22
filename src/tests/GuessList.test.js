import React from 'react';
import { shallow } from 'enzyme';

import GuessList from '../components/GuessList';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });
});
