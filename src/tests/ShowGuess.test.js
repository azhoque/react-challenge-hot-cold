import React from 'react';
import { shallow } from 'enzyme';

import ShowGuess from '../components/ShowGuess';

describe('<ShowGuess />', () => {
    it('Renders without crashing', () => {
        shallow(<ShowGuess />);
    });
});