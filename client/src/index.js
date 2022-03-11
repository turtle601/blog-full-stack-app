// React 셋팅
import React from 'react';
import ReactDOM from 'react-dom';

// react-router 관련 라이브러리
import { BrowserRouter as Router } from 'react-router-dom';

// redux 관련 라이브러리
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './stores';

import App from './App';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
