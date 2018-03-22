import React from 'react';
import { shallow } from 'enzyme';

import GuessSection from '../components/GuessSection';

describe('<GuessSection />', () => {
    it('Render without crashing', () => {
        shallow(<GuessSection />);
    });
});
