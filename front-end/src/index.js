import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';

const store = legacy_createStore(reducers, {}, compose(applyMiddleware(thunk)));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)