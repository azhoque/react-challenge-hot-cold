import React from 'react';
import { shallow } from 'enzyme';

import GuessCount from '../components/GuessCount';

describe('<GuessCount />', () => {
    it('Render without crashing', () => {
        shallow(<GuessCount />);
    });
    it('should render count', () => {
        const value = 99;
        let wrapper = shallow(<GuessCount guessCount={value} />);
        expect(wrapper.text()).toEqual(`Guess #${value}!`);
    });
});