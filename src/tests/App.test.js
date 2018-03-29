import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from '../pages/App';

describe('<App />', () => {
  it('Render without crashing', () => {
      shallow(<App />);
  });
  it('Changes state.guesses in app when makeGuess is called and adds feedback', () => {
    //const callback = jest.fn();
    const wrapper = shallow(<App />);// 
    wrapper.setState ({correctAnswer : 50}); 
    wrapper.instance().makeGuess(50);
    expect(wrapper.state('guesses')).toEqual([50]);
    expect(wrapper.state('feedback')).toEqual('You got it!');
   // expect(callback).toHaveBeenCalledWith(correctAnswer);
  });
  
  it('can restarts a game', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      guesses: [1, 2, 3, 4],
      feedback: 'Great',
      //correctAnswer: -1 //why are we using -1 to restart
    });
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your Guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  });

  it('can show and hide Info by changing state.showInfo', () => {
    
  })

});
