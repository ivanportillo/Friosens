import React from 'react';
import { Route } from 'react-router';

import Login from 'containers/Login';
import Layout from 'components/Layout';

import { LOGIN_PATH, ROOT_PATH } from './paths';

const createRoutes = store => {
  const routes = (
    <Route>
      <Route onEnter={requiredNotAuthenticated} path="/login" component={Login} />
      <Route onEnter={requiredAuthenticated} path="/" component={Layout} />
    </Route>);

  function requiredAuthenticated(nextState, replace, fn) {
    const state = store.getState();
    if (!state.auth.user && !state.auth.isBooting){
      replace(LOGIN_PATH);
    }
    fn();
  }

  function requiredNotAuthenticated(nextState, replace, fn) {
    const state = store.getState();
    if (state.auth.user && !state.auth.isBooting){
      replace(ROOT_PATH);
    }
    fn();
  }

  return routes;
};


export default createRoutes;
