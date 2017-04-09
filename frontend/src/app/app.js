import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'normalize.css';

import routes from 'routes';
import reducers from 'reducers';
import sagas from 'sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(browserHistory),
    ),
  ),
);

sagaMiddleware.run(sagas);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes()}
    </Router>
  </Provider>, document.getElementById('root'));
