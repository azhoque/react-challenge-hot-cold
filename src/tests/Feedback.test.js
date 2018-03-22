import React from 'react';
import { shallow } from 'enzyme';

import Feedback from '../components/Feedback';

describe('<Feedback />', () => {
    it('Render without crashing', () => {
        shallow(<Feedback />);
    });
});