import React from 'react';
import { shallow } from 'enzyme';

import ShowGuess from '../components/ShowGuess';

describe('<ShowGuess />', () => {
    it('Render without crashing', () => {
        shallow(<ShowGuess />);
    });

});