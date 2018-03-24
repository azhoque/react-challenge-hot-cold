import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import GuessForm from '../components/GuessForm';

describe('<GuessForm />', () => {
    it('Render without crashing', () => {
        shallow(<GuessForm />);
    });

});