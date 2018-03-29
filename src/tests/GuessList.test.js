import React from 'react';
import { shallow } from 'enzyme';

import GuessList from '../components/GuessList';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });
  it('Renders guess list', () => {
    const wrapper = shallow (<GuessList guesses = {[1,10,20]}/>);
    console.log(wrapper.find('li').text())

  })
});
