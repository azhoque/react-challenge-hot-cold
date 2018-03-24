import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../pages/App';

describe('<App />', () => {
  it('Render without crashing', () => {
      shallow(<App />);
  });
  it('Changes state.guesses in app when makeGuess is called', () => {
    //
  });
});
