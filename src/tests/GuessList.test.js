import React from 'react';
import { shallow } from 'enzyme';

import GuessList from '../components/GuessList';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });
  it('Renders guess list', () => {
    const guesses = [1,10,20]
    const wrapper = shallow (<GuessList guesses = {guesses}/>);
    const listItemVals = wrapper.find('li').map(element => parseInt(element.text()))
    expect(listItemVals).toEqual(guesses)
  })
});
