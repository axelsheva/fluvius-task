import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';

const history = createBrowserHistory();

const isAuthenticated =
  JSON.parse(localStorage.getItem('isAuthenticated')) || false;

const store = configureStore({ auth: { isAuthenticated } }, history);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
