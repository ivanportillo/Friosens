import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'normalize.css';

import createRoutes from 'routes';
import reducers from 'reducers';
import sagas from 'sagas';

const browserHistory = createHistory();

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

const routes = createRoutes(store);

sagaMiddleware.run(sagas);

render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      {routes}
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
