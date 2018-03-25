import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from '../pages/App';

describe('<App />', () => {
  it('Render without crashing', () => {
      shallow(<App />);
  });
  it('Changes state.guesses in app when makeGuess is called', () => {
    //const callback = jest.fn();
    const wrapper = mount(<App />);// 
    wrapper.setState ({correctAnswer : 50}); 
    wrapper.instance().makeGuess(50);
    expect(wrapper.state('guesses')).toEqual([50]);
    expect(wrapper.state('feedback')).toEqual('You got it!');
   // expect(callback).toHaveBeenCalledWith(correctAnswer);
  });
});
