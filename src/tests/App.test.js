import React from 'react';
import ReactDOM from 'react-dom';
import App from '../pages/App';

describe('<App />', () => {
  it('Render without crashing', () => {
      shallow(<App />);
  });
});