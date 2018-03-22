import React from 'react';
import { shallow } from 'enzyme';

import Info from '../components/Info';

describe('<Info />', () => {
    it('Render without crashing', () => {
        shallow(<Info />);
    });
});