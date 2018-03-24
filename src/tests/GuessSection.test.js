import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessSection from '../components/GuessSection';

describe('<GuessSection />', () => {
    it('Render without crashing', () => {
        shallow(<GuessSection />);
    });
    it('Should fire the onMakeGuess callback when the GuessForm is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessSection onMakeGuess={callback} />);
        // the reason value is a string is because we are setting the value
        // of an input box which is always a string
        const value = "5";
        wrapper.find('#userGuess').instance().value = value;
        wrapper.find('GuessForm form').simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
      })
});



  