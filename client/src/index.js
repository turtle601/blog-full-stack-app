// React 셋팅
import React from 'react';
import ReactDOM from 'react-dom';

// react-router 관련 라이브러리
import { BrowserRouter as Router } from 'react-router-dom';

// redux 관련 라이브러리
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// redux-saga 미들웨어
import createSagaMiddleware from 'redux-saga';

// redux-logger 라이브러리
import { createLogger } from 'redux-logger';

// redux + redux-saga
import rootReducer from './stores';
import rootSaga from './sagas';

// localStorage user 가져오기
import { loadUser } from './utils/localStorage';

import App from './App';

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
loadUser(store);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
