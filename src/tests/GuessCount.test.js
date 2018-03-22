import React from 'react';
import { shallow } from 'enzyme';

import GuessCount from '../components/GuessCount';

describe('<GuessCount />', () => {
    it('Render without crashing', () => {
        shallow(<GuessCount />);
    });
});