import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../components/NavBar';

describe('<NavBar />', () => {
    it('Renders without crashing', () =>{
        shallow(<NavBar/>);
    });

    it('Should fire the restartGame when NEWGAME is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<NavBar restartGame={callback} />);
        wrapper.find('.new a').simulate('click');
        expect(callback).toHaveBeenCalledWith();
      })
});