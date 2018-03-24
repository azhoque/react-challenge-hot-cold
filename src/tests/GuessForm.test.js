import React from 'react';
import { shallow } from 'enzyme';

import GuessForm from '../components/GuessForm';

describe('<GuessForm />', () => {
    it('Render without crashing', () => {
        shallow(<GuessForm />);
    });

});