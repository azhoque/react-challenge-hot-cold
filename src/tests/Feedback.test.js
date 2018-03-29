import React from 'react';
import { shallow } from 'enzyme';

import Feedback from '../components/Feedback';

describe('<Feedback />', () => {
    it('Render without crashing', () => {
        shallow(<Feedback />);
    });

    it('should render feedback', () => {
        let showFeedback = 'You are awesome!';
        let wrapper = shallow(<Feedback feedback={showFeedback} />);
        expect(wrapper.contains(showFeedback)).toEqual(true);
    });
});