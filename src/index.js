import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './lib/registerServiceWorker';

import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
