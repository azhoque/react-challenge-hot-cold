import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './lib/registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
